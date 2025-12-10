import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Code2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const { student } = portfolioData;

  return (
    <footer className="bg-secondary/50 dark:bg-card border-t mt-16 md:mt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg">IT FolioFlow</span>
          </Link>

          <div className="flex gap-4">
            {student.socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {student.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
