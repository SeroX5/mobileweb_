// นำมาจากหน้าโครงการ firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPovcL8kP-AFWjWt2QOht0J3uRMe1-vMY",
  authDomain: "moblieweb-dfaa2.firebaseapp.com",
  projectId: "moblieweb-dfaa2",
  storageBucket: "moblieweb-dfaa2.firebasestorage.app",
  messagingSenderId: "693484403683",
  appId: "1:693484403683:web:b9e0b108e238d34adabed6",
  measurementId: "G-7SQHTN8DBE"
};

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  ConfirmationResult,
  RecaptchaVerifier
} from "firebase/auth";

import {
  AuthUser,
  IAuthService,
  EmailPasswordCredentials,
  PhoneCredentials
} from "./auth-interface";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

function mapUser(u: any): AuthUser {
  return {
    uid: u.uid,
    email: u.email ?? null,
    phoneNumber: u.phoneNumber ?? null,
    displayName: u.displayName ?? null,
    photoUrl: u.photoURL ?? null,
  };
}

let verifier: RecaptchaVerifier | null = null;
let confirmationResult: ConfirmationResult | null = null;

const recaptchaContainerId = "recaptcha-container";

function getRecaptchaVerifier(): RecaptchaVerifier {
  if (!verifier) {
    verifier = new RecaptchaVerifier(
      firebaseAuth,
      recaptchaContainerId,
      { size: "invisible" }
    );
  }
  return verifier;
}

export class FirebaseWebAuthService implements IAuthService {

  async getCurrentUser(): Promise<AuthUser | null> {
    return firebaseAuth.currentUser
      ? mapUser(firebaseAuth.currentUser)
      : null;
  }

  async loginWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {

    const r = await signInWithEmailAndPassword(
      firebaseAuth,
      creds.email,
      creds.password
    );

    return mapUser(r.user);
  }

  // ✅ เพิ่ม Register ตรงนี้
  async registerWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {

    const r = await createUserWithEmailAndPassword(
      firebaseAuth,
      creds.email,
      creds.password
    );

    return mapUser(r.user);
  }

  async loginWithGoogle(): Promise<AuthUser> {
    const provider = new GoogleAuthProvider();
    const r = await signInWithPopup(firebaseAuth, provider);
    return mapUser(r.user);
  }

  async startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }> {

    const verifier = getRecaptchaVerifier();

    confirmationResult = await signInWithPhoneNumber(
      firebaseAuth,
      creds.phoneNumberE164,
      verifier
    );

    return { verificationId: confirmationResult.verificationId };
  }

  async confirmPhoneCode(payload: {
    verificationId: string;
    verificationCode: string;
  }): Promise<AuthUser> {

    if (!confirmationResult) {
      throw new Error("No confirmation result");
    }

    const r =
      await confirmationResult.confirm(payload.verificationCode);

    return mapUser(r.user);
  }

  async logout(): Promise<void> {
    await firebaseAuth.signOut();
  }
}
