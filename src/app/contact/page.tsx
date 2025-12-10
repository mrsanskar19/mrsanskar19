import { portfolioData } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const { student } = portfolioData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 font-headline">Send a Message</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 font-headline">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href={`mailto:${student.email}`} className="hover:text-primary transition-colors">
                      {student.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <span>
                      State University,
                      <br />
                      123 University Drive, Anytown, USA
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-64 bg-muted">
                    <iframe 
                        width="100%" 
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy" 
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618090546505!2d-73.987844084593!3d40.748440979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622559397523!5m2!1sen!2sus">
                    </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
