import {useTheme} from 'styled-components';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {useAuthContext} from '../../hooks/useAuth';
import {
  Header,
  Container,
  ContentContainer,
  UserInfosContainer,
  UserInfosContent,
  UserInfoText,
  SignOutText,
  SignOutButton,
  SignOutIcon,
  UserShiftContainer,
  IconButton,
  BackIcon,
  UserPhotoIcon,
  UserImage,
} from './styles';
import {useCollaboratorRequests} from '../../hooks/useCollaboratorRequests';
import {ShiftShimmer} from './shimmer';
import {Avatar} from '../../components';

export const User = () => {
  const {COLORS} = useTheme();

  const queryClient = useQueryClient();

  const {navigate} = useNavigation();

  const {user, signOut} = useAuthContext();

  const {useFindCollaborator, useChangeCollaboratorAvatar} =
    useCollaboratorRequests({queryClient});

  const {data: collaborator, isLoading} = useFindCollaborator(user?.user_id);
  const {mutateAsync: changeAvatar, isLoading: changingAvatar} =
    useChangeCollaboratorAvatar();

  const handleGoBack = () => {
    navigate('home');
  };

  async function handleUserPhotoSelect() {
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
        name: `${user?.user_name}.${fileExtension}`.toLowerCase(),
        uri: photo.uri,
        type: photo.type,
      };

      const userPhotoUploadForm = new FormData();
      userPhotoUploadForm.append('file', photoFile);

      await changeAvatar({
        form: userPhotoUploadForm,
        collaborator_id: user?.user_id,
      });
    }
  }

  return (
    <Container>
      <Header>
        <IconButton width={40} height={40} onPress={handleGoBack}>
          <BackIcon />
        </IconButton>
      </Header>
      <ContentContainer>
        <UserInfosContainer>
          <UserInfosContent>
            <Avatar size={90} headerAvatar={false} />
          </UserInfosContent>
          <UserInfosContent>
            <UserInfoText>{`${user?.user_name} ${user?.user_surname}`}</UserInfoText>
          </UserInfosContent>
          <UserInfosContent backgroundColor={COLORS.BLUE_300}>
            <UserInfoText weight={600} color={COLORS.WHITE}>
              Horários
            </UserInfoText>
          </UserInfosContent>
          <UserShiftContainer>
            <UserShiftContainer justifyContent="center" width={25}>
              <UserInfoText weight={600}>Entrada</UserInfoText>
            </UserShiftContainer>
            <UserShiftContainer justifyContent="center" width={25}>
              <UserInfoText weight={600}>I.Intervalo</UserInfoText>
            </UserShiftContainer>
            <UserShiftContainer justifyContent="center" width={25}>
              <UserInfoText weight={600}>F.Intervalo</UserInfoText>
            </UserShiftContainer>
            <UserShiftContainer justifyContent="center" width={25}>
              <UserInfoText weight={600}>Saída</UserInfoText>
            </UserShiftContainer>
          </UserShiftContainer>
          {isLoading ? (
            <ShiftShimmer />
          ) : (
            <UserShiftContainer>
              <UserShiftContainer justifyContent="center" width={25}>
                <UserInfoText>{collaborator?.shift_start}</UserInfoText>
              </UserShiftContainer>
              <UserShiftContainer justifyContent="center" width={25}>
                <UserInfoText>{collaborator?.interval_start}</UserInfoText>
              </UserShiftContainer>
              <UserShiftContainer justifyContent="center" width={25}>
                <UserInfoText>{collaborator?.interval_end}</UserInfoText>
              </UserShiftContainer>
              <UserShiftContainer justifyContent="center" width={25}>
                <UserInfoText>{collaborator?.shift_end}</UserInfoText>
              </UserShiftContainer>
            </UserShiftContainer>
          )}
        </UserInfosContainer>
        <SignOutButton onPress={async () => signOut()}>
          <SignOutIcon />
          <SignOutText>SAIR</SignOutText>
        </SignOutButton>
      </ContentContainer>
    </Container>
  );
};
