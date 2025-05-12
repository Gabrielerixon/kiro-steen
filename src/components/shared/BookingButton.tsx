'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BookingButtonProps {
  large?: boolean;
  className?: string;
  text?: string;
}

export default function BookingButton({ large = false, className = '', text = 'Boka Tid' }: BookingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "inline-block bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors text-center";
  const sizeClasses = large ? "py-4 px-8 text-lg" : "py-2 px-6 text-base";
  const hoverEffect = isHovered ? "transform -translate-y-1 shadow-lg" : "";
  
  return (
    <Link
      href="/hitta-oss-kontakt"
      className={`${baseClasses} ${sizeClasses} ${hoverEffect} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Link>
  );
}