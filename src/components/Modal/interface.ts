export interface CustomModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  headerTitle: string;
  headerIcon: React.ReactNode;
  children: React.ReactNode;
  height?: number;
}
