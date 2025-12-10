import { portfolioData } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { student } = portfolioData;

  return (
    <section id="home" className="py-24 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight font-headline">
              Hi, I'm <span className="text-primary">{student.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {student.title}
            </p>
          </div>
          <p className="text-lg text-muted-foreground">
            {student.bio}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download>
                Download CV <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="pt-4 flex justify-center gap-2">
            {student.socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
