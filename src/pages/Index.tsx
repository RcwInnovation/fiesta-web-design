import { useState } from "react";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import ReservationForm from "@/components/ReservationForm";
import ReservationModal from "@/components/ReservationModal";
import ImageSlider from "@/components/ImageSlider";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import foodTruck1 from "@/assets/food-truck-1.jpg";
import foodTruck2 from "@/assets/food-truck-2.jpg";
import catering from "@/assets/catering.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "Prepared with love following traditional Mexican family recipes",
  },
  {
    icon: Star,
    title: "Fresh Ingredients",
    description: "We only use the freshest and highest quality ingredients",
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Fixed restaurant, mobile food truck or catering for events",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Delicious food without long waits, perfect for your day",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Regular Customer",
    text: "The best tacos I've ever had outside of Mexico. The flavor is incredible and the service is always excellent.",
    rating: 5,
  },
  {
    name: "Mike Thompson",
    role: "Corporate Event",
    text: "We hired their catering for a 100-person event and everyone was delighted. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Food Truck Regular",
    text: "I always look for the food truck when it's in my area. The burritos are huge and delicious.",
    rating: 5,
  },
];

const featuredImages = [heroTacos, restaurant1, foodTruck1];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSlider />

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-3 md:mb-4">
              Choose Your Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
              Whether you're looking for a romantic dinner, quick food on the go, or catering for your special event, 
              we have the perfect option for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              image={restaurant1}
              title="Restaurant"
              description="Experience authentic Mexican dining in our cozy family-friendly restaurant."
              link="/restaurant"
              cta="Book a Table"
            />
            <ServiceCard
              image={foodTruck1}
              title="Food Truck"
              description="Find our colorful food truck at events and locations throughout Calgary."
              link="/food-truck"
              cta="See Locations"
            />
            <ServiceCard
              image={catering}
              title="Catering"
              description="We bring the Mexican fiesta to your event with custom menus and professional service."
              link="/catering"
              cta="Get a Quote"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Why Choose Us?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-2">
              Flavor That Conquers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4 md:mb-6">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg md:text-2xl text-foreground mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu with Slider */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <ImageSlider images={featuredImages} alt="Featured dishes" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-secondary text-secondary-foreground rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
                <p className="font-display text-2xl md:text-4xl">$17.85</p>
                <p className="font-medium text-sm md:text-base">3 Special Tacos</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                From Food Truck to Your Table
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-4 md:mb-6">
                Our Star Dishes
              </h2>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                From carnitas tacos to birria burritos, every dish is 
                prepared with fresh ingredients and traditional recipes that have passed 
                from generation to generation.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {["Carnitas (pulled pork)", "Birria (tender beef)", "Cochinita Pibil", "Tinga de Pollo"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/menu" className="inline-block">
                <button className="bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-primary-dark transition-colors shadow-lg">
                  View Full Menu
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-foreground text-card">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-card mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-card/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={18} />
                  ))}
                </div>
                <p className="text-card/90 mb-4 md:mb-6 italic text-sm md:text-base">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-card">{testimonial.name}</p>
                  <p className="text-card/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                Ready to Order?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-4 md:mb-6">
                Make Your Reservation Today
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Don't wait any longer to enjoy authentic Mexican food. 
                Reserve your table, order for pickup, or request a quote 
                for your next event.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm md:text-base">Extended Hours</p>
                    <p className="text-muted-foreground text-xs md:text-sm">Open until 11pm on weekends</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm md:text-base">3231 17 Ave SE, Calgary</p>
                    <p className="text-muted-foreground text-xs md:text-sm">Easy access and parking available</p>
                  </div>
                </div>
              </div>
            </div>

            <ReservationForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
