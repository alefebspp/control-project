import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftWidth: 0,
      }}
      contentContainerStyle={{
        backgroundColor: 'red',
        borderRadius: 0,
      }}
      text1Style={{
        fontSize: 17,
        color: 'white',
      }}
      text2Style={{
        fontSize: 12,
        color: 'white',
      }}
    />
  ),
  info: (props: any) => (
    <InfoToast
      {...props}
      style={{
        borderLeftWidth: 0,
      }}
      contentContainerStyle={{
        backgroundColor: '#00224B',
        borderRadius: 0,
      }}
      text1Style={{
        fontSize: 17,
        color: 'white',
      }}
      text2Style={{
        fontSize: 10,
        color: 'white',
      }}
    />
  ),
};

export {toastConfig};
