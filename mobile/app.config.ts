import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Coexistence",
  slug: "mobile",
  version: "1.0.0",
  plugins: [
    "@react-native-google-signin/google-signin",
    "@react-native-firebase/app",
    "@react-native-firebase/messaging",
    "@react-native-community/datetimepicker",
  ],
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  ios: {
    supportsTablet: true,
  },
  android: {
    googleServicesFile:
      process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/android-icon-foreground.png",
      backgroundImage: "./assets/android-icon-background.png",
      monochromeImage: "./assets/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
    package: "com.borgues.mobile",
    permissions: ["android.permission.POST_NOTIFICATIONS"],
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "29e851f1-ee25-474c-8402-7964117a712a",
    },
  },
  owner: "borgues",
};

export default config;