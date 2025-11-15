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

  const baseClasses = "inline-block bg-white text-teal-600 font-semibold rounded-md hover:bg-gray-200 transition-all duration-200 text-center shadow-md hover:shadow-lg";
  const sizeClasses = large ? "py-4 px-8 text-lg" : "py-4 px-8 text-base";
  const hoverEffect = isHovered ? "transform -translate-y-0.5" : "";
  
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