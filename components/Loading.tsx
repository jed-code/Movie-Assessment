import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieProps {
  autoPlay?: boolean;
  loop?: boolean;
  width?: number;
  height?: number;
}

const LottieAnimation: React.FC<LottieProps> = ({
  autoPlay = true,
  loop = true,
  width = 200,
  height = 200,
}) => {
  const animationRef = useRef<LottieView>(null);

  return (
    <View className="w-full flex-1 flex-row items-center justify-center ">
      <LottieView
        ref={animationRef}
        source={require('../assets/Animation/LoadingAnimation.json')}
        autoPlay={autoPlay}
        loop={loop}
        style={{ width, height }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LottieAnimation;
