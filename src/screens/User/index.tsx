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
} from './styles';

export const User = () => {
  const {user, signOut} = useAuthContext();

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <UserInfosContainer>
          <UserIcon />
          <UserInfosContent>
            <UserInfoText>Nome:</UserInfoText>
            <UserInfoText>{`${user?.user_name} ${user?.user_surname}`}</UserInfoText>
          </UserInfosContent>
        </UserInfosContainer>
        <SignOutButton onPress={async () => signOut()}>
          <SignOutIcon />
          <SignOutText>SAIR</SignOutText>
        </SignOutButton>
      </ContentContainer>
    </Container>
  );
};
