import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary/10 dark:bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm ready to bring your ideas to life. Let's collaborate and create something amazing together.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
