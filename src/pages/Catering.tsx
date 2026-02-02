import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, PartyPopper, Building, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import ReservationModal from "@/components/ReservationModal";
import ImageSlider from "@/components/ImageSlider";
import catering from "@/assets/catering.jpg";
import cateringEvent1 from "@/assets/catering-event-1.jpg";
import cateringEvent2 from "@/assets/catering-event-2.jpg";

const eventTypes = [
  { icon: Building, title: "Corporate Events", description: "Meetings, conferences, executive lunches and company celebrations" },
  { icon: PartyPopper, title: "Private Parties", description: "Birthdays, anniversaries, graduations and any special celebration" },
  { icon: Heart, title: "Weddings", description: "From dinner to taco stations for the reception" },
  { icon: Users, title: "Community Events", description: "Fairs, festivals and large gatherings" },
];

const packages = [
  {
    name: "Basic Taquiza",
    price: "From $15/person",
    includes: ["3 types of protein", "Corn and flour tortillas", "Salsas and sides", "Plates and utensils"],
    minGuests: "20 people minimum",
  },
  {
    name: "Mexican Fiesta",
    price: "From $25/person",
    includes: ["5 types of protein", "Guacamole and chips", "Rice and beans", "Quesadillas", "Agua fresca", "Service included"],
    minGuests: "30 people minimum",
    popular: true,
  },
  {
    name: "Premium Experience",
    price: "From $40/person",
    includes: ["Custom menu", "Live taco station", "Mexican desserts", "Premium drinks", "Dedicated chef", "Themed decor"],
    minGuests: "50 people minimum",
  },
];

const cateringImages = [catering, cateringEvent1, cateringEvent2];

const Catering = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${catering})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-xl md:max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Catering
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-4 hero-text-shadow">
              Your Event, Our Flavor
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-card/90 mb-6 md:mb-8">
              We make your celebration a success with authentic Mexican food and professional service.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Our Catering
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Memorable Events
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={cateringImages} alt="Catering events" />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Event Types
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-3 md:mb-4">
              We Serve Every Occasion
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-card hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4 md:mb-6">
                  <event.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg md:text-2xl text-foreground mb-2 md:mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-xs md:text-base">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Catering Packages
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-3 md:mb-4">
              Choose Your Package
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base px-4">
              We offer different options to fit your budget and needs. 
              All packages are customizable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card relative ${
                  pkg.popular ? "ring-2 ring-primary md:scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-primary font-bold text-xl md:text-2xl mb-1 md:mb-2">{pkg.price}</p>
                <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">{pkg.minGuests}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={16} />
                      <span className="text-foreground text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className="w-full" 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Quote
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Free Quote
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Tell Us About Your Event
            </h2>
          </div>
          <ReservationForm serviceType="catering" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceType="catering"
      />
    </div>
  );
};

export default Catering;
