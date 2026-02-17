import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import type {
  IAuthService,
  AuthUser,
  EmailPasswordCredentials,
  PhoneCredentials
} from "./auth-interface";

/**
 * แปลง user จาก Firebase plugin -> AuthUser ของระบบเรา
 */
function mapUser(u: any): AuthUser {
  return {
    uid: u.uid,
    email: u.email ?? null,
    phoneNumber: u.phoneNumber ?? null,
    displayName: u.displayName ?? null,
    photoUrl: u.photoUrl ?? null,
  };
}

export class FirebaseAppAuthService implements IAuthService {

  /**
   * ดึง user ปัจจุบัน
   */
  async getCurrentUser(): Promise<AuthUser | null> {
    const result = await FirebaseAuthentication.getCurrentUser();
    return result.user ? mapUser(result.user) : null;
  }

  /**
   * Login ด้วย Email / Password
   */
  async loginWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {

    const result =
      await FirebaseAuthentication.signInWithEmailAndPassword({
        email: creds.email,
        password: creds.password,
      });

    return mapUser(result.user);
  }
  /**
   * Register ด้วย Email / Password
   */
  async registerWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {

    const result =
      await FirebaseAuthentication.createUserWithEmailAndPassword({
        email: creds.email,
        password: creds.password,
      });

    return mapUser(result.user);
  }

  /**
   * Login ด้วย Google
   */
  async loginWithGoogle(): Promise<AuthUser> {

    const result =
      await FirebaseAuthentication.signInWithGoogle();

    return mapUser(result.user);
  }

  /**
   * เริ่ม Login ด้วยเบอร์โทร
   * จะ resolve เมื่อได้ verificationId
   */
  async startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }> {

    return new Promise(async (resolve, reject) => {

      let resolved = false;

      // Listener: verification failed
      const failedListener =
        await FirebaseAuthentication.addListener(
          "phoneVerificationFailed",
          (event: any) => {

            if (resolved) return;
            resolved = true;

            awaitCleanup();
            reject(
              new Error(
                event?.message ?? "Phone verification failed"
              )
            );
          }
        );

      // Listener: code sent
      const sentListener =
        await FirebaseAuthentication.addListener(
          "phoneCodeSent",
          (event: any) => {

            if (resolved) return;
            resolved = true;

            awaitCleanup();
            resolve({
              verificationId: event.verificationId,
            });
          }
        );

      // ฟังก์ชัน cleanup
      const awaitCleanup = () => {
        failedListener.remove();
        sentListener.remove();
      };

      try {
        await FirebaseAuthentication.signInWithPhoneNumber({
          phoneNumber: creds.phoneNumberE164,
        });
      } catch (err) {

        if (resolved) return;
        resolved = true;

        awaitCleanup();
        reject(err);
      }

    });
  }

  /**
   * ยืนยันรหัส OTP
   */
  async confirmPhoneCode(payload: {
    verificationId: string;
    verificationCode: string;
  }): Promise<AuthUser> {

    const result =
      await FirebaseAuthentication.confirmVerificationCode({
        verificationId: payload.verificationId,
        verificationCode: payload.verificationCode,
      });

    return mapUser(result.user);
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }
}
