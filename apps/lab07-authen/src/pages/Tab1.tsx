import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonSpinner
} from "@ionic/react";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { authService } from "../auth/auth-service";
import type { AuthUser } from "../auth/auth-interface";

const Tab1: React.FC = () => {

  const history = useHistory();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const u = await authService.getCurrentUser();

      if (!u) {
        history.replace("/login");
        return;
      }

      setUser(u);
      setLoading(false);
    };

    loadUser();
  }, [history]);

  const handleLogout = async () => {
    await authService.logout();
    history.replace("/login");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {loading && <IonSpinner />}

        {!loading && user && (
          <IonCard>
            <IonCardContent style={{ textAlign: "center" }}>

              <IonAvatar style={{ margin: "0 auto 20px auto" }}>
                <img
                  src={
                    user.photoUrl ??
                    "https://i.pinimg.com/236x/2d/8b/48/2d8b4804499eb61521e58678dbbdb690.jpg"
                  }
                  alt="avatar"
                />
              </IonAvatar>

              <h2>{user.displayName ?? "No Display Name"}</h2>

              <p><strong>UID:</strong> {user.uid}</p>
              <p><strong>Email:</strong> {user.email ?? "-"}</p>
              <p><strong>Phone:</strong> {user.phoneNumber ?? "-"}</p>

              <IonButton
                expand="block"
                color="danger"
                onClick={handleLogout}
                style={{ marginTop: "20px" }}
              >
                Logout
              </IonButton>

            </IonCardContent>
          </IonCard>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
