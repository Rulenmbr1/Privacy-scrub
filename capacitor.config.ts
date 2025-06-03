import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.privacyscrub.app',
  appName: 'Privacy Scrub',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
