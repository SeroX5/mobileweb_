import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export function usePhotoGallery() {
  const photos = ref<Photo[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    photos.value.unshift(photo);
  };

  return {
    photos,
    takePhoto
  };
}
