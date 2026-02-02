import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTacos from "@/assets/hero-tacos.jpg";
import foodTruck1 from "@/assets/food-truck-1.jpg";
import foodTruck2 from "@/assets/food-truck-2.jpg";
import catering from "@/assets/catering.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: restaurant1,
    title: "Restaurant",
    subtitle: "Authentic Mexican Experience",
    description: "Enjoy the best Mexican food in a cozy atmosphere with exceptional service",
    cta: "Book a Table",
    link: "/restaurant",
  },
  {
    image: foodTruck1,
    title: "Food Truck",
    subtitle: "Mexican Flavor on the Move",
    description: "We bring the most authentic Mexican flavors directly to your location",
    cta: "See Locations",
    link: "/food-truck",
  },
  {
    image: foodTruck2,
    title: "Catering",
    subtitle: "Your Event, Our Flavor",
    description: "We make your celebration a success with our personalized catering service",
    cta: "Request Quote",
    link: "/catering",
  },
  {
    image: heroTacos,
    title: "Special Menu",
    subtitle: "Flavors That Conquer",
    description: "Tacos, burritos, quesadillas and more. Prepared with traditional Mexican recipes",
    cta: "View Menu",
    link: "/menu",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div
                className={`max-w-xl md:max-w-2xl text-card transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4 animate-fade-in">
                  {slide.title}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 md:mb-4 hero-text-shadow leading-tight">
                  {slide.subtitle}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-card/90 mb-6 md:mb-8 max-w-lg">
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button variant="hero" size="lg" className="md:text-lg md:px-8 md:py-6">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 p-2 md:p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-card md:w-7 md:h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 p-2 md:p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-card md:w-7 md:h-7" />
      </button>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8 md:w-10"
                : "bg-card/50 hover:bg-card/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
