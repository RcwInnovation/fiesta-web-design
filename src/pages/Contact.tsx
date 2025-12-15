import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import restaurant from "@/assets/restaurant.jpg";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("type") as "restaurant" | "foodtruck" | "catering" | null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contacto
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-card hero-text-shadow">
            Hablemos
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      123 Calle Principal<br />
                      Toronto, ON M5V 2K1<br />
                      Canadá
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Teléfono</h3>
                    <a href="tel:+14161234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (416) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                    <a href="mailto:info@theburrito.ca" className="text-muted-foreground hover:text-primary transition-colors">
                      info@theburrito.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Horarios</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes - Jueves: 11:00 AM - 10:00 PM</p>
                      <p>Viernes - Sábado: 11:00 AM - 11:00 PM</p>
                      <p>Domingo: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2690944618755!2d-79.38923492392788!3d43.64345115216897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1702500000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de The Burrito"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <ReservationForm serviceType={serviceType || "restaurant"} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
