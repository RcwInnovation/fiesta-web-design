import { Link } from "react-router-dom";
import { UtensilsCrossed, Users, Music, Wine, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import restaurant from "@/assets/restaurant.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";

const features = [
  { icon: UtensilsCrossed, title: "Menú Gourmet", description: "Platillos tradicionales con un toque contemporáneo" },
  { icon: Users, title: "Ambiente Familiar", description: "Perfecto para reuniones y celebraciones" },
  { icon: Music, title: "Música en Vivo", description: "Viernes y sábados con mariachi" },
  { icon: Wine, title: "Bebidas Artesanales", description: "Margaritas y micheladas de la casa" },
];

const Restaurant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Restaurante
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-4 hero-text-shadow">
              Experiencia Gastronómica Mexicana
            </h1>
            <p className="text-lg md:text-xl text-card/90 mb-8">
              Sumérgete en un ambiente auténtico donde cada platillo cuenta una historia de tradición y pasión.
            </p>
            <Link to="/contact?type=restaurant">
              <Button variant="hero" size="xl">
                Reservar Mesa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Restaurant */}
      <section className="py-20 bg-corn-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nuestra Historia
              </span>
              <h2 className="font-display text-5xl text-foreground mt-2 mb-6">
                Más que un Restaurante, Una Familia
              </h2>
              <p className="text-muted-foreground mb-6">
                Desde 2015, hemos llevado los sabores auténticos de México a Toronto. 
                Nuestras recetas han pasado de generación en generación, y cada platillo 
                es preparado con el mismo amor y dedicación que nuestras abuelas ponían en su cocina.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ingredientes frescos importados de México",
                  "Chef con más de 20 años de experiencia",
                  "Tortillas hechas a mano diariamente",
                  "Salsas caseras con chiles auténticos",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={heroTacos}
                alt="Platillos del restaurante"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={18} />
                  ))}
                </div>
                <p className="font-semibold text-foreground">4.9 en Google Reviews</p>
                <p className="text-muted-foreground text-sm">+500 reseñas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="py-20 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Reservaciones
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2">
              Reserva Tu Mesa
            </h2>
          </div>
          <ReservationForm serviceType="restaurant" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Restaurant;
