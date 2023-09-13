import {ScrollView} from 'react-native';
import {
  LocationLabel,
  LocationsContainer,
  PrimaryLocationIcon,
  SecondaryLocationIcon,
} from './styles';
import {useTheme} from 'styled-components';
import {LocationsProps} from './interface';
import {LocationsShimmer} from './shimmer';

export const Locations = ({registry, isLoading}: LocationsProps) => {
  const {COLORS, FONT_SIZE} = useTheme();

  return isLoading ? (
    <LocationsShimmer />
  ) : (
    <LocationsContainer height={30}>
      <LocationsContainer height={100}>
        <LocationsContainer
          applyTopBorder
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          height={20}>
          <PrimaryLocationIcon />
          <LocationLabel fontSize={FONT_SIZE.LG} fontWeight={500}>
            LOCAIS
          </LocationLabel>
        </LocationsContainer>

        <LocationsContainer height={80}>
          <ScrollView style={{width: '100%'}}>
            <LocationsContainer
              backgroundColor={COLORS.GRAY_50}
              flexDirection="row"
              padding={10}>
              <SecondaryLocationIcon />
              <LocationLabel fontSize={FONT_SIZE.XS} fontWeight={500}>
                Entrada
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer flexDirection="row" padding={10}>
              <LocationLabel wrapText fontSize={FONT_SIZE.XS} fontWeight={400}>
                {registry
                  ? registry?.start_location
                    ? registry?.start_location
                    : '--'
                  : '--'}
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer
              backgroundColor={COLORS.GRAY_50}
              flexDirection="row"
              padding={10}>
              <SecondaryLocationIcon />
              <LocationLabel fontSize={FONT_SIZE.XS} fontWeight={500}>
                I.Intervalo
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer flexDirection="row" padding={10}>
              <LocationLabel wrapText fontSize={FONT_SIZE.XS} fontWeight={400}>
                {registry
                  ? registry?.interval_start_location
                    ? registry?.interval_start_location
                    : '--'
                  : '--'}
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer
              backgroundColor={COLORS.GRAY_50}
              flexDirection="row"
              padding={10}>
              <SecondaryLocationIcon />
              <LocationLabel fontSize={FONT_SIZE.XS} fontWeight={500}>
                F.Intervalo
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer flexDirection="row" padding={10}>
              <LocationLabel wrapText fontSize={FONT_SIZE.XS} fontWeight={400}>
                {registry
                  ? registry?.interval_end_location
                    ? registry?.interval_end_location
                    : '--'
                  : '--'}
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer
              backgroundColor={COLORS.GRAY_50}
              flexDirection="row"
              padding={10}>
              <SecondaryLocationIcon />
              <LocationLabel fontSize={FONT_SIZE.XS} fontWeight={500}>
                Saída
              </LocationLabel>
            </LocationsContainer>
            <LocationsContainer flexDirection="row" padding={10}>
              <LocationLabel wrapText fontSize={FONT_SIZE.XS} fontWeight={400}>
                {registry
                  ? registry?.end_location
                    ? registry?.end_location
                    : '--'
                  : '--'}
              </LocationLabel>
            </LocationsContainer>
          </ScrollView>
        </LocationsContainer>
      </LocationsContainer>
    </LocationsContainer>
  );
};
