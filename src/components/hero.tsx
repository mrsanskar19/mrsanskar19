import { portfolioData } from "@/lib/data";
import { Button } from "./ui/button";
import HeroImage from "./hero-image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const { student } = portfolioData;

  return (
    <section id="home" className="py-20 md:py-32 bg-secondary/30 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
            <HeroImage />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline">
              Hi, I'm <span className="text-primary">{student.name}</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              {student.title}
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {student.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
             <div className="mt-8 flex justify-center md:justify-start gap-4">
              {student.socials.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="h-10 w-10">
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
