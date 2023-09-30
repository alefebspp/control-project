import {useEffect, useState} from 'react';
import {Platform, Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyboardShow = () => {
      setKeyboardIsVisible(true);
    };

    const handleKeyboardHide = () => {
      setKeyboardIsVisible(false);
    };

    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    Keyboard.addListener(showEvent, handleKeyboardShow);
    Keyboard.addListener(hideEvent, handleKeyboardHide);

    return () => {
      Keyboard.removeAllListeners(showEvent);
      Keyboard.removeAllListeners(hideEvent);
    };
  }, []);

  return {
    keyboardIsVisible,
  };
};
