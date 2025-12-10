import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Certificates from '@/components/certificates';
import Career from '@/components/career';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          <Projects />
          <Experience />
          <Certificates />
          <Career />
        </div>
      </main>
      <Footer />
    </div>
  );
}
