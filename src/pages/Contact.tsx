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
      <section className="relative h-[35vh] md:h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-card hero-text-shadow">
            Let's Talk
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6 md:mb-8">
                Contact Information
              </h2>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      123 Stephen Avenue SW<br />
                      Calgary, AB T2P 1G8<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">Phone</h3>
                    <a href="tel:+14034019412" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                      +1 (403) 401-9412
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">Email</h3>
                    <a href="mailto:rcwluna@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                      rcwluna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1 text-sm md:text-base">
                      <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-card h-48 md:h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.4144882391384!2d-114.0692684!3d51.0468672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe9e248fe45%3A0x8e6c0a25da0b3b3a!2sStephen%20Avenue%20Walk!5e0!3m2!1sen!2sca!4v1702500000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Burrito Location"
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
