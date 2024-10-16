'use client';

import reditAnimation from '@/assets/lotties/redit-robot-logo.json';
import Lottie from 'react-lottie';

type LottieRedditIconProps = {
  height?: number;
  width?: number;
};

export function LottieRedditIcon({ height = 200, width = 200 }: LottieRedditIconProps) {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: reditAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultLottieOptions} height={height} width={width} />;
}
