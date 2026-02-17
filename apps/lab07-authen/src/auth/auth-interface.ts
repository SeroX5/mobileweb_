// User object ที่เราจะใช้ในทั้ง Web และ Android
export interface AuthUser {
  uid: string;
  email?: string | null;
  phoneNumber?: string | null;
  displayName?: string | null;
  photoUrl?: string | null;
}

// สำหรับ login / register แบบ Email/Password
export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

// สำหรับ login แบบ Phone
export interface PhoneCredentials {
  phoneNumberE164: string;
}

// ประเภท provider ที่รองรับ
export type AuthProvider = "email" | "phone" | "google";

// โครงสร้าง Service กลางที่ทั้ง Web และ App ต้องทำตาม
export interface IAuthService {

  // เช็ค user ปัจจุบัน
  getCurrentUser(): Promise<AuthUser | null>;

  // Login แบบ Email
  loginWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser>;

  // Register แบบ Email
  registerWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser>;

  // Login Google
  loginWithGoogle(): Promise<AuthUser>;

  // Phone login step 1 (ส่ง OTP)
  startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }>;

  // Phone login step 2 (ยืนยัน OTP)
  confirmPhoneCode(payload: {
    verificationId: string;
    verificationCode: string;
  }): Promise<AuthUser>;

  // Logout
  logout(): Promise<void>;
}
