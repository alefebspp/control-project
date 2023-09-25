import styled, {css} from 'styled-components/native';

export interface ContainerStyleProps {
  width?: number;
  height?: number;
  flexDirection?: string;
  justifyContent?: string;
  gap?: number;
  percentageValue?: boolean;
  backgroundColor?: string;
  padding?: number;
}

export const Container = styled.View<ContainerStyleProps>`
  ${props => css`
  padding: ${props.padding ? props.padding : 0}px;
  background-color: ${
    props.backgroundColor ? props.backgroundColor : 'transparent'
  };
    width: ${
      !props.width
        ? 'auto'
        : `${props.width}${props.percentageValue ? '%' : 'px'}`
    };
    height: ${
      !props.height
        ? 'auto'
        : `${props.height}${props.percentageValue ? '%' : 'px'}`
    };
    display: flex;
    flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
    justify-content: ${
      props.justifyContent ? props.justifyContent : 'space-between'
    };
    gap: ${props.gap ? `${props.gap}px` : 0}
    align-items: center;
  `}
`;
