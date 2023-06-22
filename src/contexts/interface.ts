import {LoginRequest} from '../services/Auth';
import {User} from '../services/Auth/interface';

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface AuthContextInitialValue {
  signIn(loginData: LoginRequest): Promise<void>;
  signOut(): Promise<void>;
  user: User | undefined;
  asyncStorageDataIsLoading: boolean;
}
