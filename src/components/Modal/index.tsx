import {FC} from 'react';
import {Modal} from 'react-native';
import {useTheme} from 'styled-components';

import {CustomModalProps} from './interface';

import {
  CloseButton,
  CloseIcon,
  ModalContainer,
  ModalContent,
  ModalHeader,
  Text,
} from './styles';

export const CustomModal: FC<CustomModalProps> = ({
  isModalVisible,
  onClose,
  headerTitle,
  headerIcon,
  children,
  height = 100,
}) => {
  const {COLORS} = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent height={height}>
          <ModalHeader>
            {headerIcon}
            <Text size={20} weight={500} color={COLORS.BLUE_400}>
              {headerTitle}
            </Text>
            <CloseButton onPress={onClose}>
              <CloseIcon strokeWidth={1.5} />
            </CloseButton>
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
