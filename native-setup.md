# Native mobile (Capacitor / Cordova) setup — Microphone

The memorization feature needs the OS-level microphone permission declared in
the native project. The web code (src/lib/native-mic.ts) requests permission
through the native bridge at runtime, but these declarations are mandatory —
without them the prompt will never appear.

## iOS — ios/App/App/Info.plist

Add inside the top-level `<dict>`:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>This app requires microphone access to check your Quran recitation.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>This app uses speech recognition to correct your Quran recitation word by word.</string>
```

## Android — android/app/src/main/AndroidManifest.xml

Add inside `<manifest>` (above `<application>`):

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

If targeting Android 6+ with Cordova, also install one of:
- `cordova.plugins.diagnostic`
- `cordova-plugin-android-permissions`

For Capacitor, install `@capacitor-community/speech-recognition` (recommended —
the Web Speech API is not available in Android WebView; this plugin provides
native speech recognition) and run `npx cap sync`.

## After editing

```bash
npx cap sync   # Capacitor
# or
cordova prepare
```

Then rebuild and reinstall the app — permission changes only apply on a fresh build.
