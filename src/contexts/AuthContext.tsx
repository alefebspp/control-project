import {createContext, useEffect, useMemo, useState} from 'react';
import {api} from '../services/api';
import {AuthContextProps, AuthContextInitialValue} from './interface';
import {loginRequest} from '../services/Auth';
import {User, LoginRequest} from '../services/Auth/interface';
import {
  storageUserSave,
  storageUserGet,
  storageUserRemove,
} from '../storage/storageUser';
import {
  storageTokenSave,
  storageTokenGet,
  storageTokenRemove,
} from '../storage/storageToken';

export const AuthContext = createContext<AuthContextInitialValue>(
  {} as AuthContextInitialValue,
);

export const AuthContextProvider = ({children}: AuthContextProps) => {
  const [asyncStorageDataIsLoading, setAsyncStorageDataIsLoading] =
    useState(true);
  const [user, setUser] = useState<User | undefined>();

  const storageUserAndToken = async (user: User, token: string) => {
    await storageUserSave(user);
    await storageTokenSave(token);
    setAsyncStorageDataIsLoading(false);
  };

  const updateUserAndToken = (user: User, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  };

  const signIn = async (loginData: LoginRequest) => {
    try {
      const {user, access_token} = await loginRequest(loginData);
      if (user && access_token) {
        setAsyncStorageDataIsLoading(true);
        await storageUserAndToken(user, access_token);
        updateUserAndToken(user, access_token);
      }
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      setUser({} as User);
      await storageUserRemove();
      await storageTokenRemove();
    } catch (error) {
      throw error;
    }
  };

  async function loadUserData() {
    setAsyncStorageDataIsLoading(true);
    const loggedUser = await storageUserGet();
    const token = await storageTokenGet();
    setAsyncStorageDataIsLoading(false);

    if (loggedUser && token) {
      updateUserAndToken(loggedUser, token);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  const authProviderValue = useMemo(
    () => ({
      signIn,
      user,
      signOut,
      asyncStorageDataIsLoading,
    }),
    [signIn, user, signOut],
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
