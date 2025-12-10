'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroImage() {
  const [scrollY, setScrollY] = useState(0);
  const studentImage = PlaceHolderImages.find(p => p.id === 'student-profile');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!studentImage) {
    return null;
  }

  return (
    <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-background/20 group">
      <Image
        src={studentImage.imageUrl}
        alt="Student profile photo"
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        data-ai-hint={studentImage.imageHint}
        priority
        sizes="(max-width: 768px) 192px, 240px"
      />
    </div>
  );
}
