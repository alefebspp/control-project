import {Dispatch, SetStateAction} from 'react';

export interface CurrentLocationProps {
  setLocation: Dispatch<SetStateAction<string | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
