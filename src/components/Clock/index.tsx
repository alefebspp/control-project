import {useEffect, useState} from 'react';

import {
  LocationClockContainer,
  CalendarClockIcon,
  ClockText,
  LabelContainer,
} from './styles';
import {Container} from '../../theme/layout';

import {LocationClockProps} from './interface';

import {
  checkIfCurrentDateEqualsRegistryDate,
  getHourMinutesFormated,
  resetDateTime,
} from '../../utils';

export const Clock = ({registryDate}: LocationClockProps) => {
  return (
    <Container height={60}>
      <Container flexDirection="row" percentageValue height={100} width={100}>
        <Container percentageValue height={100} width={20}>
          <LocationClockContainer>
            <CalendarClockIcon />
          </LocationClockContainer>
        </Container>
        <Container percentageValue height={100} width={80}>
          <LocationClockContainer>
            <Label registryDate={registryDate} />
          </LocationClockContainer>
        </Container>
      </Container>
    </Container>
  );
};

const Label = ({registryDate}: LocationClockProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatedRegistryDate = resetDateTime(registryDate);

  const currentDateEqualsRegistryDate =
    checkIfCurrentDateEqualsRegistryDate(registryDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getFormatedDate = () => {
    const date = registryDate ? formatedRegistryDate : currentDate;

    const day = registryDate ? date!.getUTCDate() : date!.getDate();
    const month = date!.getUTCMonth() + 1;
    const year = date!.getUTCFullYear();

    return `${formatNumber(day)}/${formatNumber(month)}/${year}`;
  };

  const formatNumber = (numero: number) => {
    return numero.toString().padStart(2, '0');
  };
  return (
    <LabelContainer
      justifyContent={
        currentDateEqualsRegistryDate ? 'space-evenly' : 'center'
      }>
      <ClockText>
        {currentDateEqualsRegistryDate
          ? getHourMinutesFormated(currentDate)
          : null}
      </ClockText>
      <ClockText>{getFormatedDate()}</ClockText>
    </LabelContainer>
  );
};
