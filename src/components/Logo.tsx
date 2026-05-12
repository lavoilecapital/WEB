import React from 'react';
import logoImg from './logo.png';
interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 44, className = '' }: LogoMarkProps) {
  return <img src={logoImg} alt="La Voile Capital" width={size} height={size} className={className} style={{ objectFit: 'contain' }} />;
}

export function LogoFull({ width = 220 }: { width?: number }) {
  return <img src={logoImg} alt="La Voile Capital" width={width} style={{ objectFit: 'contain' }} />;
}

export function LogoFooter({ width = 180 }: { width?: number }) {
  return <LogoFull width={width} />;
}

export function SwissCross({ size = 20, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-label="Swiss Cross">
      <rect x="8" y="2" width="4" height="16" rx="0.5" fill={color} />
      <rect x="2" y="8" width="16" height="4" rx="0.5" fill={color} />
    </svg>
  );
}
