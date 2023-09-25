import {LayoutContainerProps} from './interface';
import * as Styles from './styles';

export const Container = ({children, ...params}: LayoutContainerProps) => {
  return <Styles.Container {...params}>{children}</Styles.Container>;
};
