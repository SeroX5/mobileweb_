import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
} from "@ionic/react";

import { useState } from "react";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";
import { GeminiVisionService } from "../core/gemini.service";

import "./Tab1.css";

const Tab1: React.FC = () => {
  const [image, setImage] = useState<Base64Image | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<ImageAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = (reader.result as string).split(",")[1];

      setImage({
        base64: base64String,
        mimeType: file.type,
      });

      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!image) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await GeminiVisionService.analyze(image);
      setResult(res);
    } catch (err) {
      console.error("Analyze error:", err);
    }

    setLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ai-toolbar">
          <IonTitle>🤖 AI Image Analyzer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ai-bg">

        {/* Upload Section */}
        <div className="upload-box">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="preview">
            <img src={preview} alt="preview" />
          </div>
        )}

        {/* Analyze Button */}
        <IonButton
          expand="block"
          onClick={analyzeImage}
          disabled={!image || loading}
          className="analyze-btn"
        >
          🚀 Analyze Image
        </IonButton>

        {/* Loading */}
        {loading && (
          <div className="loading-box">
            <IonSpinner name="crescent" />
            <p>AI is analyzing your image...</p>
          </div>
        )}

        {/* Result */}
        {result && (
          <IonCard className="result-card">
            <IonCardHeader>
              <IonCardTitle >🧠 AI Result</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>

              <div className="result-section">
                <h3>📌 Caption</h3>
                <p>{result.caption}</p>
              </div>

              <div className="result-section">
                <h3>🏷 Tags</h3>
                <div className="tag-container">
                  {result.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {result.objects && result.objects.length > 0 && (
                <div className="result-section">
                  <h3>📦 Objects</h3>
                  <ul>
                    {result.objects.map((obj, index) => (
                      <li key={index}>
                        {obj.name}
                        {obj.confidence !== undefined &&
                          ` (${obj.confidence.toFixed(2)})`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.safety && (
                <div className="result-section">
                  <h3>🔒 Safety</h3>
                  <p>
                    Sensitive:{" "}
                    {result.safety.isSensitive ? "Yes" : "No"}
                  </p>
                  {result.safety.notes && <p>{result.safety.notes}</p>}
                </div>
              )}

            </IonCardContent>
          </IonCard>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
