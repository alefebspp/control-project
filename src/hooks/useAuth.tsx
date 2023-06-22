import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {AuthContextInitialValue} from '../contexts/interface';

export const useAuthContext = (): AuthContextInitialValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
