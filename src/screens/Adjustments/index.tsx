import {ScrollView} from 'react-native';
import {Adjustment} from '../../components';
import {useAdjustmentsRequests} from '../../hooks/useAdjustmentsRequests';
import {
  AdjustmentsContainer,
  CalendarIcon,
  Header,
  PageContainer,
  Title,
  TitleContainer,
  TitleSection,
} from './styles';
import {Adjustment as AdjustmentInterface} from '../../services/AdjustmentsRequests/interface';
import {getCurrentDate, monthMap} from '../../utils';
import {AdjustmentsShimmer} from './shimmer';

export const Adjustments = () => {
  const {useListAdjustmentsRequest} = useAdjustmentsRequests({});

  const {data: adjustments, isLoading} = useListAdjustmentsRequest();

  const getCurrentMonthAndYearDescription = () => {
    const currentMonthAndYear = getCurrentDate(true);

    const currentMonthAndYearSplited = currentMonthAndYear.split('-');

    const year = currentMonthAndYearSplited[1];

    const month = currentMonthAndYearSplited[0];

    const monthDescription = monthMap[month];

    return `${monthDescription} de ${year}`;
  };

  const currentMonthAndYearDescription = getCurrentMonthAndYearDescription();

  return (
    <PageContainer>
      <Header></Header>
      <TitleContainer>
        <TitleSection>
          <CalendarIcon />
          <Title>{currentMonthAndYearDescription}</Title>
        </TitleSection>
      </TitleContainer>
      <AdjustmentsContainer>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {isLoading ? (
            <AdjustmentsShimmer />
          ) : (
            adjustments?.map((adjustment: AdjustmentInterface) => (
              <Adjustment adjustment={adjustment} key={adjustment.id} />
            ))
          )}
        </ScrollView>
      </AdjustmentsContainer>
    </PageContainer>
  );
};
