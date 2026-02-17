import { Capacitor } from "@capacitor/core";
import type { IAuthService } from "./auth-interface";
import { FirebaseWebAuthService } from "./auth-web";
import { FirebaseAppAuthService } from "./auth-app";

// ตรวจว่าเป็น Native จริง ๆ (Android / iOS)
const isNative =
  Capacitor.getPlatform() === "android" ||
  Capacitor.getPlatform() === "ios";

export const authService: IAuthService = isNative
  ? new FirebaseAppAuthService()   // Android / iOS
  : new FirebaseWebAuthService();  // Web
