'use client';

import reditAnimation from '@/assets/lotties/reddit-robot-loading.json';
import Lottie from 'react-lottie';

export function Loading() {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: reditAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Lottie options={defaultLottieOptions} height={200} width={200} />
    </div>
  );
}
