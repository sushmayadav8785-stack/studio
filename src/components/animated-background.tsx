'use client';

import React from 'react';

export default function AnimatedBackground() {
  const [crystals, setCrystals] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    const crystalCount = 50;
    const generatedCrystals = Array.from({ length: crystalCount }).map((_, i) => {
      const style: React.CSSProperties = {
        '--x-start': `${Math.random() * 100}vw`,
        '--x-end': `${Math.random() * 100}vw`,
        '--rotate-end': `${Math.random() * 360}deg`,
        animationDelay: `${Math.random() * -20}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
        left: `${Math.random() * 100}%`,
      };
      return <div key={i} className="crystal" style={style} />;
    });
    setCrystals(generatedCrystals);
  }, []);

  return <div className="fixed inset-0 -z-10">{crystals}</div>;
}
