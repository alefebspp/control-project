import {ScrollView} from 'react-native';
import {Adjustment, Select} from '../../components';
import {useAdjustmentsRequests} from '../../hooks/useAdjustmentsRequests';
import {AdjustmentsContainer, Header, PageContainer} from './styles';
import {Adjustment as AdjustmentInterface} from '../../services/AdjustmentsRequests/interface';
import {getCurrentMonthAndYearDescription} from '../../utils';
import {AdjustmentsShimmer} from './shimmer';
import {useAuthContext} from '../../hooks/useAuth';
import {useState} from 'react';

export const Adjustments = () => {
  const currentDate = new Date();

  const [period, setPeriod] = useState<string | undefined>(
    `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-01`,
  );
  const {user} = useAuthContext();

  const {useListAdjustmentsRequest} = useAdjustmentsRequests({});

  const {data: adjustments, isLoading} = useListAdjustmentsRequest(
    user?.user_id,
    period,
  );

  const currentMonthAndYearDescription = getCurrentMonthAndYearDescription();

  return (
    <PageContainer>
      <Header></Header>
      <Select
        setPeriod={setPeriod}
        currentMonthDescription={currentMonthAndYearDescription}
      />
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
