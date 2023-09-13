import React, {useEffect, useState} from 'react';
import {
  resetDateTime,
  getHourMinutesFormated,
  checkIfCurrentDateEqualsRegistryDate,
} from '../../utils';
import {ClockText, Container} from './styles';
import {ClockProps} from './interface';

export const Clock = ({registryDate}: ClockProps) => {
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
    <Container
      justifyContent={
        currentDateEqualsRegistryDate ? 'space-evenly' : 'center'
      }>
      <ClockText>
        {currentDateEqualsRegistryDate
          ? getHourMinutesFormated(currentDate)
          : null}
      </ClockText>
      <ClockText>{getFormatedDate()}</ClockText>
    </Container>
  );
};
