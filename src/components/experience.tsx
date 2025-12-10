import { portfolioData } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          My Journey
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A timeline of my professional experience and academic milestones.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-3 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {experience.map((item, index) => (
          <div key={item.id} className="relative mb-12 pl-12">
            <div className="absolute left-3 top-1 -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center ring-8 ring-background">
              <item.icon className="h-4 w-4 text-primary-foreground" />
            </div>
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-headline">{item.role}</CardTitle>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
