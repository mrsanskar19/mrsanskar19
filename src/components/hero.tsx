import { portfolioData } from "@/lib/data";
import { Button } from "./ui/button";
import HeroImage from "./hero-image";
import Link from "next/link";

export default function Hero() {
  const { student } = portfolioData;

  return (
    <section id="home" className="py-20 md:py-32 bg-secondary/30 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              Hi, I'm <span className="text-primary">{student.name}</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground font-medium">
              {student.title}
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {student.bio}
            </p>
            <div className="mt-8 flex gap-4">
              {student.socials.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
