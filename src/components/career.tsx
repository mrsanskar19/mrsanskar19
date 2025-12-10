import { portfolioData } from "@/lib/data";
import { Target } from "lucide-react";

export default function Career() {
  const { title, description } = portfolioData.careerInterests;

  return (
    <section id="career" className="py-16 md:py-24 bg-secondary/50 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-3 bg-primary rounded-full text-primary-foreground">
              <Target className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4 text-primary">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
