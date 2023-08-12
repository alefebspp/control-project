import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

export async function handleUserPhotoSelect(collaboratorName?: string) {
  const photoSelected = await launchImageLibrary({
    mediaType: 'photo',
    quality: 1,
  });

  if (photoSelected.didCancel) {
    return;
  }

  if (photoSelected.assets) {
    const [photo] = photoSelected.assets;
    if (photo.fileSize && photo.fileSize / 1024 / 1024 > 5) {
      return Toast.show({
        type: 'error',
        text1: 'Imagem muito grande',
        text2: 'Escolha uma de até 5MB',
      });
    }
    const fileExtension = photo.type?.split('/')[1];
    const photoFile = {
      name: `${collaboratorName}.${fileExtension}`.toLowerCase(),
      uri: photo.uri,
      type: photo.type,
    };

    const userPhotoUploadForm = new FormData();
    userPhotoUploadForm.append('file', photoFile);

    return userPhotoUploadForm;
  }
}
