import {useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import {Dot, DotWrapper} from './styles';

export const LoadingDots = () => {
  const animations = [
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ];

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.stagger(100, [
          Animated.sequence([
            Animated.delay(0),
            Animated.timing(animations[0], {
              toValue: 1,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(animations[0], {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.delay(100),
            Animated.timing(animations[1], {
              toValue: 1,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(animations[1], {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.delay(200),
            Animated.timing(animations[2], {
              toValue: 1,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(animations[2], {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
        ]),
      ).start();
    };

    animate();
  }, [animations]);

  return (
    <DotWrapper>
      <Animated.View
        style={{
          opacity: animations[0],
          transform: [
            {
              translateY: animations[0].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 15],
              }),
            },
          ],
        }}>
        <Dot />
      </Animated.View>
      <Animated.View
        style={{
          opacity: animations[1],
          transform: [
            {
              translateY: animations[1].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 15],
              }),
            },
          ],
        }}>
        <Dot />
      </Animated.View>
      <Animated.View
        style={{
          opacity: animations[2],
          transform: [
            {
              translateY: animations[2].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 15],
              }),
            },
          ],
        }}>
        <Dot />
      </Animated.View>
    </DotWrapper>
  );
};
