"use client";

import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
  const navItems = [
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Resume', href: '/#resume' },
    { name: 'Articles', href: '/#articles' },
    { name: 'Certificates', href: '/#certificates' },
    { name: 'Career', href: '/#career' },
    { name: 'Contact', href: '/contact' },
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
        <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={`mailto:${portfolioData.student.email}`}>Contact Me</a>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium mt-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.name}
                        </Link>
                    ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
