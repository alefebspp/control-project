import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {useCollaboratorRequests} from '../../hooks/requests/useCollaboratorRequests';
import {AvatarProps} from './interface';
import {useAuthContext} from '../../hooks/useAuth';
import {
  AvatarButton,
  AvatarIcon,
  ChangeAvatarButton,
  ChangeIcon,
  UserAvatar,
} from './styles';
import {AvatarShimmer} from './shimmer';
import {NavigationProps} from '../../routes/interface';
import {handleUserPhotoSelect} from '../../utils/functions';

export const Avatar = ({headerAvatar, size, collaborator_id}: AvatarProps) => {
  const {navigate} = useNavigation<NavigationProps>();

  const {user} = useAuthContext();

  const queryClient = useQueryClient();

  const {useChangeCollaboratorAvatar, useFindCollaborator} =
    useCollaboratorRequests({queryClient});

  const {data: collaborator, isLoading: loadingAvatar} = useFindCollaborator(
    user?.user_id,
  );

  const {mutateAsync: changeAvatar, isLoading: changingAvatar} =
    useChangeCollaboratorAvatar();

  const handleNavigate = () => {
    if (headerAvatar) {
      navigate('user');
    }
  };

  const handleChangeUserAvatar = async () => {
    if (!collaborator_id) {
      const photoFormData = await handleUserPhotoSelect(user?.user_name);
      if (photoFormData) {
        await changeAvatar({
          form: photoFormData,
          collaborator_id: user?.user_id,
        });
      }
    }
  };

  if (loadingAvatar || changingAvatar) {
    return <AvatarShimmer headerAvatar={headerAvatar} size={size} />;
  }

  return (
    <AvatarButton
      onPress={handleNavigate}
      headerAvatar={headerAvatar}
      size={size}>
      {collaborator?.avatar ? (
        <UserAvatar size={size} source={{uri: collaborator.avatar}} />
      ) : (
        <AvatarIcon size={size} />
      )}
      {!headerAvatar && !collaborator_id && (
        <ChangeAvatarButton onPress={handleChangeUserAvatar}>
          <ChangeIcon />
        </ChangeAvatarButton>
      )}
    </AvatarButton>
  );
};
