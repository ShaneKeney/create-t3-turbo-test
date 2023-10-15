// WARNING THIS ISN'T VERSIONED
import { ConfigContext, ExpoConfig } from "@expo/config";

// This is the default configuration for local development
export const ENV = {
  APP_ENV: "development",
  APP_DISPLAY_NAME: "(Dev) Rally2",
  APP_SCHEME: "rally2dev",
  APP_BUNDLE_ID: "com.rally2.dev.mobile",

  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
};

if (process.env.APP_ENV === "production") {
  setupProductionEnvironment();
} else if (process.env.APP_ENV === "staging") {
  setupStagingEnvironment();
} else {
  // Development environemnt is configured by default
}

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.APP_DISPLAY_NAME || "(Dev) Rally2",
  slug: "rally2-mobile",
  description: "Rally2.  Rally Together.  Rally2 Play More.",
  privacy: "hidden",
  owner: "rally2",
  platforms: ["android", "ios"],
  scheme: ENV.APP_SCHEME || "rally2dev",
  version: "1.0.0",
  orientation: "portrait",
  icon:
    ENV.APP_ENV === "production"
      ? "./assets/icon.png"
      : "./assets/dev/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1F2937",
  },
  updates: {
    fallbackToCacheTimeout: 3000,
    url: "https://u.expo.dev/04695b1a-d4ab-44a0-9cfc-17bd96ad84f1",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: ENV.APP_BUNDLE_ID || "com.rally2.dev.mobile",
    buildNumber: "1.0.0",
    supportsTablet: true,
  },
  android: {
    package: "com.rally2.mobile",
    adaptiveIcon: {
      foregroundImage: ENV.APP_ENV
        ? "./assets/adaptive-icon.png"
        : "./assets/dev/adaptive-icon.png",
      backgroundColor: "#1F2937",
    },
  },
  web: {
    bundler: "metro",
  },
  extra: {
    ...ENV,
    eas: {
      projectId: "04695b1a-d4ab-44a0-9cfc-17bd96ad84f1",
    },
  },
  // Beta feature that supports typed routes in the app
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  plugins: [
    "expo-build-properties",
    "expo-router",
    "./expo-plugins/with-modify-gradle.js",
  ],
});

function setupProductionEnvironment() {
  ENV.APP_BUNDLE_ID = "com.rally2.mobile";
  ENV.APP_ENV = "production";
  ENV.APP_DISPLAY_NAME = "Rally2";
  ENV.APP_SCHEME = "rally2";
}

function setupStagingEnvironment() {
  // TODO: Add staging configuration
}
