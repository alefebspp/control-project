import {useEffect, useState} from 'react';

import {
  LocationClockContainer,
  CalendarClockIcon,
  ClockText,
  LabelContainer,
  CalendarCheckIcon,
  AdjustmentTypeText,
} from './styles';
import {Container} from '../../theme/layout';

import {LocationClockProps} from './interface';

import {
  checkIfCurrentDateEqualsRegistryDate,
  getHourMinutesFormated,
  resetDateTime,
} from '../../utils';

export const Clock = ({registryDate, adjustmentInfo}: LocationClockProps) => {
  const containsAdjustmentInfo = adjustmentInfo != undefined;

  console.log('ADJUSTMENT INFO:', adjustmentInfo);

  return (
    <Container height={60}>
      <Container flexDirection="row" percentageValue height={100} width={100}>
        <Container
          percentageValue
          height={100}
          width={adjustmentInfo ? 40 : 20}>
          <LocationClockContainer adjustmentInfo={containsAdjustmentInfo}>
            {containsAdjustmentInfo ? (
              <CalendarCheckIcon />
            ) : (
              <CalendarClockIcon />
            )}
            {containsAdjustmentInfo && (
              <AdjustmentTypeText>
                {adjustmentInfo.registryType}
              </AdjustmentTypeText>
            )}
          </LocationClockContainer>
        </Container>
        <Container
          percentageValue
          height={100}
          width={adjustmentInfo ? 60 : 80}>
          <LocationClockContainer>
            <Label
              adjustmentInfo={adjustmentInfo}
              registryDate={registryDate}
            />
          </LocationClockContainer>
        </Container>
      </Container>
    </Container>
  );
};

const Label = ({registryDate, adjustmentInfo}: LocationClockProps) => {
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

  const defineClockText = () => {
    if (currentDateEqualsRegistryDate && !adjustmentInfo) {
      return getHourMinutesFormated(currentDate);
    }
    if (adjustmentInfo) {
      return adjustmentInfo.previousHour ?? '--';
    }
    return null;
  };

  const formatNumber = (numero: number) => {
    return numero.toString().padStart(2, '0');
  };
  return (
    <LabelContainer
      justifyContent={
        currentDateEqualsRegistryDate || adjustmentInfo
          ? 'space-evenly'
          : 'center'
      }>
      <ClockText>
        {defineClockText()}
        {/* {currentDateEqualsRegistryDate
          ? getHourMinutesFormated(currentDate)
          : null} */}
      </ClockText>
      <ClockText>{getFormatedDate()}</ClockText>
    </LabelContainer>
  );
};
