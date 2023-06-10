import React, {useEffect, useState} from 'react';
import {resetDateTime, getHourMinutesFormated} from '../../utils';
import {ClockText, Container} from './styles';
import {ClockProps} from './interface';

export const Clock = ({registryDate}: ClockProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatedCurrentDate = resetDateTime(currentDate);

  const formatedRegistryDate = resetDateTime(registryDate);

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

    const dia = date!.getUTCDate();
    const mes = date!.getUTCMonth() + 1;
    const ano = date!.getUTCFullYear();

    return `${formatNumber(dia)}/${formatNumber(mes)}/${ano}`;
  };

  const formatNumber = (numero: number) => {
    return numero.toString().padStart(2, '0');
  };

  const isSameOrEmptyDate =
    formatedCurrentDate?.getTime() == formatedRegistryDate?.getTime() ||
    !registryDate;

  return (
    <Container justifyContent={isSameOrEmptyDate ? 'space-evenly' : 'center'}>
      <ClockText>
        {isSameOrEmptyDate ? getHourMinutesFormated(currentDate) : null}
      </ClockText>
      <ClockText>{getFormatedDate()}</ClockText>
    </Container>
  );
};
