import {ScrollView} from 'react-native';
import {Adjustment, Empty, Select} from '../../components';
import {useAdjustmentsRequests} from '../../hooks/useAdjustmentsRequests';
import {
  AdjustmentIcon,
  AdjustmentsContainer,
  Header,
  PageContainer,
  Title,
  TitleContainer,
} from './styles';
import {Adjustment as AdjustmentInterface} from '../../services/AdjustmentsRequests/interface';
import {getCurrentMonthAndYearDescription} from '../../utils';
import {AdjustmentsShimmer} from './shimmer';
import {useAuthContext} from '../../hooks/useAuth';
import {useState} from 'react';
import {useRefetchOnFocus} from '../../hooks/useRefetchOnFocus';

export const Adjustments = () => {
  const currentDate = new Date();

  const [period, setPeriod] = useState<string | undefined>(
    `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-01`,
  );
  const {user} = useAuthContext();

  const {useListAdjustmentsRequest} = useAdjustmentsRequests({});

  const {
    data: adjustments,
    isLoading,
    refetch,
  } = useListAdjustmentsRequest(user?.user_id, period);

  const currentMonthAndYearDescription = getCurrentMonthAndYearDescription();

  const emptyAdjustmentsData = adjustments?.length == 0;

  useRefetchOnFocus(refetch);

  return (
    <PageContainer>
      <Header></Header>
      <Select
        setPeriod={setPeriod}
        currentMonthDescription={currentMonthAndYearDescription}
      />
      <AdjustmentsContainer>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {emptyAdjustmentsData ? (
            <Empty dataName="ajustes" />
          ) : isLoading ? (
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
