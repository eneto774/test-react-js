'use client';

import reditAnimation from '@/assets/lotties/redit-robot-logo.json';
import Lottie from 'react-lottie';

export function LottieRedditIcon() {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: reditAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultLottieOptions} height={200} width={200} />;
}
