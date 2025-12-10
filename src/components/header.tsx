import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '@/lib/data';

export default function Header() {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Career', href: '#career' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span>IT FolioFlow</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-muted-foreground transition-colors hover:text-foreground/90"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={`mailto:${portfolioData.student.email}`}>Contact Me</a>
        </Button>
      </div>
    </header>
  );
}
