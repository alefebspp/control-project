import {useHourRecordRequests} from '../../hooks/requests/useHourRecordRequests';
import {useAuthContext} from '../../hooks/useAuth';
import {HoursBalanceProps} from './interface';
import {
  Text,
  Wrapper,
  Section,
  Title,
  Container,
  TextContainer,
  ChartIcon,
  PlusIcon,
  MinusIcon,
  TotalIcon,
} from './styles';
import {HoursBalanceSkeleton} from './skeleton';
import {useRefetchOnFocus} from '../../hooks/requests/useRefetchOnFocus';

export const HoursBalance = ({period}: HoursBalanceProps) => {
  const {user} = useAuthContext();
  const {find} = useHourRecordRequests();

  const {data: hourRecord, isLoading, refetch} = find(user?.user_id, period);

  useRefetchOnFocus(refetch);

  if (isLoading) {
    return <HoursBalanceSkeleton />;
  }

  return (
    <Wrapper
      imageStyle={{borderRadius: 15}}
      resizeMode="cover"
      source={require('../../assets/blue-gradient.jpg')}>
      <Container>
        <Section>
          <TextContainer>
            <ChartIcon />
            <Title>Horas extras</Title>
          </TextContainer>
          <Text>{hourRecord?.monthLabel}</Text>
        </Section>
        <Section alignItems="flex-end">
          <TextContainer>
            <PlusIcon />
            <Title weight={400} hourText>
              {hourRecord?.additional}
            </Title>
          </TextContainer>
        </Section>
      </Container>
      <Container>
        <Section>
          <TextContainer>
            <TotalIcon />
            <Title>Total</Title>
          </TextContainer>
          <TextContainer>
            {hourRecord?.totalType == 'pending' ? (
              <MinusIcon size={15} />
            ) : (
              <PlusIcon size={15} />
            )}
            <Title weight={400}>{hourRecord?.total}</Title>
          </TextContainer>
        </Section>
        <Section alignItems="flex-end">
          <TextContainer>
            <MinusIcon />
            <Title weight={400} hourText>
              {hourRecord?.pending}
            </Title>
          </TextContainer>
        </Section>
      </Container>
    </Wrapper>
  );
};
