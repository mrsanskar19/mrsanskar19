"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroImage() {
  const studentImages = PlaceHolderImages.filter(p => p.id.startsWith('student-profile'));

  if (!studentImages.length) {
    return null;
  }

  return (
    <Carousel className="w-full max-w-md" opts={{ loop: true }}>
      <CarouselContent>
        {studentImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-4 border-background/20">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
