# Generate Privacy Scrub APK Online

## Option 1: GitHub Actions (Recommended)
Upload your project to GitHub and use automated builds:

1. Create GitHub repository
2. Upload the android/ folder  
3. Add this workflow file: `.github/workflows/build-android.yml`

```yaml
name: Build Android APK
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'
    - name: Build APK
      run: |
        cd android
        chmod +x gradlew
        ./gradlew assembleDebug
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: privacy-scrub-apk
        path: android/app/build/outputs/apk/debug/app-debug.apk
```

## Option 2: Online Build Services

### Bitrise.io
- Free tier available
- Upload your android/ project
- Automated APK builds
- Direct download links

### CircleCI  
- Free builds for open source
- Android build environment
- Artifact downloads

### AppCenter (Microsoft)
- Free tier
- Easy APK generation
- Distribution management

## Option 3: Local Development

### Requirements
- Java JDK 8 or higher
- Android Studio or Android SDK
- Gradle (included in project)

### Build Command
```bash
cd android
./gradlew assembleDebug
```

Your APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`