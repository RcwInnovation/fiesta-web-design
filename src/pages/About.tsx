import { Star, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSlider from "@/components/ImageSlider";
import restaurant from "@/assets/restaurant.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";
import catering from "@/assets/catering.jpg";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "8+", label: "Years of Experience" },
  { icon: Heart, value: "100%", label: "Mexican Passion" },
];

const values = [
  {
    title: "Authenticity",
    description: "Our recipes come directly from Mexican families, passed down from generation to generation.",
  },
  {
    title: "Freshness",
    description: "Fresh ingredients every day. Our tortillas are made by hand every morning.",
  },
  {
    title: "Community",
    description: "We're more than a restaurant, we're part of the Calgary community.",
  },
  {
    title: "Passion",
    description: "Every dish is prepared with love and the desire to share Mexican culture.",
  },
];

const aboutImages = [restaurant, heroTacos, catering];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-card hero-text-shadow">
            Our Story
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img src={logo} alt="The Burrito" className="w-48 md:w-64 mb-6 md:mb-8" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6">
                From the Heart of Mexico to Calgary
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  The Burrito was born in 2015 with a simple dream: to bring authentic Mexican flavors 
                  to the streets of Calgary. What started as a small food truck has become 
                  a benchmark for Mexican cuisine in the city.
                </p>
                <p>
                  Our founder, originally from Guadalajara, brought with him his grandmother's recipes 
                  and a passion for sharing Mexico's rich culinary culture. Every taco, burrito 
                  and quesadilla is a tribute to those roots.
                </p>
                <p>
                  Today, with our restaurant, food truck and catering service, we remain 
                  committed to the same mission: offering delicious, fresh and authentic food 
                  to everyone seeking a taste of Mexico.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-card"
                >
                  <stat.icon className="text-primary mx-auto mb-3 md:mb-4" size={32} />
                  <p className="font-display text-2xl md:text-4xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-xs md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-12 md:py-16 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Our Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={aboutImages} alt="About The Burrito" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              What Defines Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 shadow-card hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <span className="font-display text-lg md:text-2xl text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="font-display text-lg md:text-2xl text-foreground mb-2 md:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-xs md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-4 md:mb-6">
            Ready to Try?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
            Come visit us at the restaurant, find us at the food truck, or let us make 
            your next event something special with our catering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Link to="/restaurant">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Book a Table
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
