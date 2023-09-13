import styled, {css} from 'styled-components/native';

interface ItemsContainerProps {
  width?: number;
  height?: number;
  flexDirection?: string;
  justifyContent?: string;
  gap?: number;
}

export const ItemsContainer = styled.View<ItemsContainerProps>`
  ${props => css`
    width: ${!props.width ? 'auto' : `${props.width}%`};
    height: ${!props.height ? 'auto' : `${props.height}%`};
    display: flex;
    flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
    justify-content: ${
      props.justifyContent ? props.justifyContent : 'space-between'
    };
    gap: ${props.gap ? `${props.gap}px` : 0}
    align-items: center;
  `}
`;
