import styled from 'styled-components/native';
import {BaseToast, ErrorToast, SuccessToast} from 'react-native-toast-message';
import {AlertCircle, X, Check} from 'lucide-react-native';

const IconContainer = styled.View`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      renderLeadingIcon={() => (
        <IconContainer>
          <X size={30} color="#FF0000" />
        </IconContainer>
      )}
      style={{borderLeftColor: '#FF0000'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        color: 'black',
      }}
    />
  ),
  success: (props: any) => (
    <SuccessToast
      {...props}
      renderLeadingIcon={() => (
        <IconContainer>
          <Check size={30} color="#32CD32" />
        </IconContainer>
      )}
      style={{borderLeftColor: '#32CD32'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        color: 'black',
      }}
    />
  ),
  warning: (props: any) => (
    <BaseToast
      {...props}
      renderLeadingIcon={() => (
        <IconContainer>
          <AlertCircle size={30} color="#FFBF00" />
        </IconContainer>
      )}
      style={{borderLeftColor: '#FFBF00'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        color: 'black',
      }}
    />
  ),
};

export {toastConfig};
