import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText
} from "@ionic/react";

import { useState } from "react";
import { useHistory } from "react-router";
import { authService } from "../auth/auth-service";

import "./Login.css";

const LoginPage: React.FC = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 LOGIN
  const handleEmailLogin = async () => {
    try {
      setError("");

      await authService.loginWithEmailPassword({
        email,
        password
      });

      history.push("/tabs/tab1");

    } catch (err: any) {
      setError(err.message);
    }
  };

  // 📝 REGISTER
  const handleRegister = async () => {
    try {
      setError("");

      await authService.registerWithEmailPassword({
        email,
        password
      });

      history.push("/tabs/tab1");

    } catch (err: any) {
      setError(err.message);
    }
  };

  // 🔴 GOOGLE
  const handleGoogleLogin = async () => {
    try {
      setError("");

      await authService.loginWithGoogle();

      history.push("/tabs/tab1");

    } catch (err: any) {
      setError(err.message);
    }
  };

  // 📱 PHONE
  const handlePhoneLogin = async () => {
    const phone = prompt("Enter phone number (+66xxxxxxxxx)");
    if (!phone) return;

    try {
      setError("");

      const { verificationId } =
        await authService.startPhoneLogin({
          phoneNumberE164: phone,
        });

      const code = prompt("Enter OTP code");
      if (!code) return;

      await authService.confirmPhoneCode({
        verificationId,
        verificationCode: code,
      });

      history.push("/tabs/tab1");

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <IonPage>
      <IonContent className="login-content">

        <div className="login-box">

          <div className="login-icon">🔐</div>

          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in or create account</p>

          <div className="input-wrapper">

            <IonInput
              className="custom-input"
              label="Email"
              labelPlacement="floating"
              type="email"
              value={email}
              onIonChange={e => setEmail(e.detail.value ?? "")}
            />

            <IonInput
              className="custom-input"
              label="Password"
              labelPlacement="floating"
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value ?? "")}
            />

          </div>

          {/* LOGIN */}
          <IonButton
            expand="block"
            onClick={handleEmailLogin}
            className="login-button"
          >
            Login
          </IonButton>

          {/* REGISTER */}
          <IonButton
            expand="block"
            fill="outline"
            onClick={handleRegister}
            style={{ marginTop: "10px" }}
          >
            Register
          </IonButton>

          {/* Divider */}
          <div
            style={{
              margin: "20px 0",
              borderTop: "1px solid rgba(255,255,255,0.2)"
            }}
          />

          {/* GOOGLE */}
          <IonButton
            expand="block"
            color="danger"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </IonButton>

          {/* PHONE */}
          <IonButton
            expand="block"
            color="medium"
            onClick={handlePhoneLogin}
            style={{ marginTop: "10px" }}
          >
            Login with Phone
          </IonButton>

          {error && (
            <IonText color="danger">
              <p className="error-text">{error}</p>
            </IonText>
          )}

          {/* Required for Web Phone Login */}
          <div id="recaptcha-container"></div>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
