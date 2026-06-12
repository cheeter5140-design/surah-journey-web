// Native shell (Capacitor / Cordova) microphone permission bridge.
// The app may run inside a native WebView wrapper where the browser's
// getUserMedia prompt never appears — the OS-level permission must be
// requested through the native bridge first.

type NativePermResult = "granted" | "denied" | "prompt" | "unavailable";

export function isNativeShell(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as any;
  return !!(w.Capacitor?.isNativePlatform?.() || w.Capacitor?.isNative || w.cordova || w.phonegap);
}

/**
 * Best-effort native microphone permission request.
 * Tries, in order: Capacitor SpeechRecognition plugin, Capacitor Microphone
 * plugin, cordova.plugins.diagnostic, cordova-plugin-android-permissions.
 * Resolves "unavailable" when no native bridge is present (pure web).
 */
export async function requestNativeMicPermission(): Promise<NativePermResult> {
  if (typeof window === "undefined") return "unavailable";
  const w = window as any;

  // --- Capacitor plugins ---
  const plugins = w.Capacitor?.Plugins;
  if (w.Capacitor?.isNativePlatform?.() || w.Capacitor?.isNative) {
    try {
      const speech = plugins?.SpeechRecognition;
      if (speech?.requestPermissions) {
        const res = await speech.requestPermissions();
        const state = res?.speechRecognition ?? res?.microphone ?? res?.state;
        if (state === "granted") return "granted";
        if (state === "denied") return "denied";
      }
    } catch (err) {
      console.warn("[native-mic] Capacitor SpeechRecognition permission failed:", err);
    }
    try {
      const micPlugin = plugins?.Microphone;
      if (micPlugin?.requestPermissions) {
        const res = await micPlugin.requestPermissions();
        const state = res?.microphone ?? res?.state;
        if (state === "granted") return "granted";
        if (state === "denied") return "denied";
      }
    } catch (err) {
      console.warn("[native-mic] Capacitor Microphone permission failed:", err);
    }
  }

  // --- Cordova: diagnostic plugin ---
  const diagnostic = w.cordova?.plugins?.diagnostic;
  if (diagnostic?.requestMicrophoneAuthorization) {
    try {
      const status: string = await new Promise((resolve, reject) =>
        diagnostic.requestMicrophoneAuthorization(resolve, reject)
      );
      const granted =
        status === diagnostic.permissionStatus?.GRANTED ||
        status === "GRANTED" ||
        status === "authorized";
      return granted ? "granted" : "denied";
    } catch (err) {
      console.warn("[native-mic] cordova diagnostic permission failed:", err);
    }
  }

  // --- Cordova: android permissions plugin ---
  const androidPerms = w.cordova?.plugins?.permissions;
  if (androidPerms?.requestPermission) {
    try {
      const granted: boolean = await new Promise((resolve) =>
        androidPerms.requestPermission(
          androidPerms.RECORD_AUDIO,
          (st: any) => resolve(!!st?.hasPermission),
          () => resolve(false)
        )
      );
      return granted ? "granted" : "denied";
    } catch (err) {
      console.warn("[native-mic] cordova permissions plugin failed:", err);
    }
  }

  return isNativeShell() ? "prompt" : "unavailable";
}
