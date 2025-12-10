import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function Articles() {
  const { articles } = portfolioData;

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section id="articles" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          My Articles & Research
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of my thoughts and findings on technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const image = PlaceHolderImages.find(p => p.id === article.imageUrl);
          return (
            <Card key={article.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {image && (
                <div className="relative aspect-video">
                  <Image
                    src={image.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{article.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{article.date}</span>
                </div>
                <CardDescription className="pt-2">{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto">
                  <a href={article.readUrl} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
