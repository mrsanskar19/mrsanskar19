import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-secondary/50 dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
                <div className="p-3 bg-primary rounded-full text-primary-foreground">
                    <FileText className="h-8 w-8" />
                </div>
            </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4">
            My Resume
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Interested in my qualifications? You can download a copy of my resume for your review.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" download>
              Download CV <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
