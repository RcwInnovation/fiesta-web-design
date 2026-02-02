import { useState } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Users, Music, Wine, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import ReservationModal from "@/components/ReservationModal";
import ImageSlider from "@/components/ImageSlider";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";

const features = [
  { icon: UtensilsCrossed, title: "Gourmet Menu", description: "Traditional dishes with a contemporary touch" },
  { icon: Users, title: "Family Atmosphere", description: "Perfect for gatherings and celebrations" },
  { icon: Music, title: "Live Music", description: "Mariachi on Fridays and Saturdays" },
  { icon: Wine, title: "Craft Drinks", description: "House margaritas and micheladas" },
];

const restaurantImages = [restaurant1, restaurant2, restaurant3];
const dishImages = [heroTacos, restaurant4, restaurant2];

const Restaurant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant1})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-xl md:max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Restaurant
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-4 hero-text-shadow">
              Mexican Dining Experience
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-card/90 mb-6 md:mb-8">
              Immerse yourself in an authentic atmosphere where every dish tells a story of tradition and passion.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
              Book a Table
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg md:text-2xl text-foreground mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Our Space
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              A Warm Atmosphere
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={restaurantImages} alt="Restaurant interior" />
          </div>
        </div>
      </section>

      {/* About Restaurant */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-4 md:mb-6">
                More Than a Restaurant, A Family
              </h2>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                We are Cinthya and Ulises, originally from Sinaloa and Morelos. Our kitchen reflects our roots.
                Some of our dishes honor the traditional style of Sinaloa, others represent the essence of Morelos, 
                and many are born from the fusion of both regions—creating a unique and authentic culinary experience.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  "Homemade-style food with authentic flavors",
                  "Recipes from Sinaloa and Morelos regions",
                  "Handmade tortillas daily",
                  "Family cooking for families since 2019",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 lg:order-2">
              <ImageSlider images={dishImages} alt="Restaurant dishes" />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={16} />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">4.9 on Google Reviews</p>
                <p className="text-muted-foreground text-xs md:text-sm">+500 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Reservations
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Book Your Table
            </h2>
          </div>
          <ReservationForm serviceType="restaurant" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceType="restaurant"
      />
    </div>
  );
};

export default Restaurant;
