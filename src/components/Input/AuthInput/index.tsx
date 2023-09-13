import * as S from './styles';
import {AuthInputProps} from './interface';
import {useState} from 'react';
import {useTheme} from 'styled-components';

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  iconType,
  errorMessage,
  setPasswordVisibility,
  hiddenPassword,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const {COLORS} = useTheme();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handlePasswordVisibility = () => {
    if (iconType == 'password' && setPasswordVisibility) {
      setPasswordVisibility(!hiddenPassword);
    }
  };

  const conditionalFocusColor = focused ? COLORS.WHITE : COLORS.MARINE_BLUE;

  return (
    <S.Container flexDirection="column">
      <S.Container flexDirection="row">
        <S.Input
          {...props}
          focused={focused}
          placeholder={label}
          placeholderTextColor={conditionalFocusColor}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <S.IconContainer
          onPress={handlePasswordVisibility}
          activeOpacity={1}
          focused={focused}>
          {iconType == 'email' && <S.EmailIcon color={conditionalFocusColor} />}
          {iconType == 'password' &&
            (hiddenPassword ? (
              <S.EyeIcon color={conditionalFocusColor} />
            ) : (
              <S.EyeOffIcon color={conditionalFocusColor} />
            ))}
        </S.IconContainer>
      </S.Container>
      <S.ErrorMessageText>{errorMessage}</S.ErrorMessageText>
    </S.Container>
  );
};
