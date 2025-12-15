import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTacos from "@/assets/hero-tacos.jpg";
import foodTruck from "@/assets/food-truck.jpg";
import catering from "@/assets/catering.jpg";
import restaurant from "@/assets/restaurant.jpg";

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
    image: restaurant,
    title: "Restaurante",
    subtitle: "Experiencia Auténtica Mexicana",
    description: "Disfruta de la mejor comida mexicana en un ambiente acogedor con servicio excepcional",
    cta: "Reservar Mesa",
    link: "/restaurant",
  },
  {
    image: foodTruck,
    title: "Food Truck",
    subtitle: "Sabor Mexicano en Movimiento",
    description: "Llevamos los sabores más auténticos de México directamente a tu ubicación",
    cta: "Ver Ubicaciones",
    link: "/food-truck",
  },
  {
    image: catering,
    title: "Catering",
    subtitle: "Tu Evento, Nuestro Sabor",
    description: "Hacemos de tu celebración un éxito con nuestro servicio de catering personalizado",
    cta: "Solicitar Cotización",
    link: "/catering",
  },
  {
    image: heroTacos,
    title: "Menú Especial",
    subtitle: "Sabores que Conquistan",
    description: "Tacos, burritos, quesadillas y más. Preparados con recetas tradicionales mexicanas",
    cta: "Ver Menú",
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div
                className={`max-w-2xl text-card transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
                  {slide.title}
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 hero-text-shadow leading-tight">
                  {slide.subtitle}
                </h1>
                <p className="text-lg md:text-xl text-card/90 mb-8 max-w-lg">
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button variant="hero" size="xl">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 p-3 rounded-full transition-all"
      >
        <ChevronLeft size={28} className="text-card" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 p-3 rounded-full transition-all"
      >
        <ChevronRight size={28} className="text-card" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-10"
                : "bg-card/50 hover:bg-card/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
