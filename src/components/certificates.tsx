import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          Certificates & Awards
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my professional certifications and recognitions.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {certificates.map((certificate, index) => {
            const image = PlaceHolderImages.find(p => p.id === certificate.imageUrl);
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <div className="relative w-full aspect-[4/3]">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={certificate.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                      <div className="p-6 text-center w-full">
                        <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-lg">{certificate.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {certificate.issuer} - {certificate.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14"/>
      </Carousel>
    </section>
  );
}
