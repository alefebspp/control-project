import {useEffect, useState} from 'react';
import * as S from './style';
import {
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
} from 'lucide-react-native';

export const MovingClock: React.FC = () => {
  const [clockTime, setClockTime] = useState<number>(12);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClockTime(prevTime => (prevTime >= 12 ? 1 : prevTime + 1));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [clockTime]);

  const getClockIcon = (time: number) => {
    const iconColor = 'white';
    const iconSize = 120;
    switch (time) {
      case 1:
        return <Clock1 color={iconColor} size={iconSize} />;
      case 2:
        return <Clock2 color={iconColor} size={iconSize} />;
      case 3:
        return <Clock3 color={iconColor} size={iconSize} />;
      case 4:
        return <Clock4 color={iconColor} size={iconSize} />;
      case 5:
        return <Clock5 color={iconColor} size={iconSize} />;
      case 6:
        return <Clock6 color={iconColor} size={iconSize} />;
      case 7:
        return <Clock7 color={iconColor} size={iconSize} />;
      case 8:
        return <Clock8 color={iconColor} size={iconSize} />;
      case 9:
        return <Clock9 color={iconColor} size={iconSize} />;
      case 10:
        return <Clock10 color={iconColor} size={iconSize} />;
      case 11:
        return <Clock11 color={iconColor} size={iconSize} />;
      case 12:
        return <Clock12 color={iconColor} size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <S.ItemsContainer width={100} height={100}>
      {getClockIcon(clockTime)}
    </S.ItemsContainer>
  );
};
