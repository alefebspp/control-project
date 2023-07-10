import {useTheme} from 'styled-components';
import {useAuthContext} from '../../hooks/useAuth';
import {
  Header,
  Container,
  ContentContainer,
  UserIcon,
  UserInfosContainer,
  UserInfosContent,
  UserInfoText,
  SignOutText,
  SignOutButton,
  SignOutIcon,
  UserShiftContainer,
} from './styles';
import {useCollaboratorRequests} from '../../hooks/useCollaboratorRequests';
import {ShiftShimmer} from './shimmer';

export const User = () => {
  const {COLORS} = useTheme();

  const {user, signOut} = useAuthContext();

  const {useFindCollaborator} = useCollaboratorRequests();

  const {data: collaborator, isLoading} = useFindCollaborator(user?.user_id);

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <UserInfosContainer>
          <UserIcon />
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
