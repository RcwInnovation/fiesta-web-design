import { Link } from "react-router-dom";
import { Users, PartyPopper, Building, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import catering from "@/assets/catering.jpg";

const eventTypes = [
  { icon: Building, title: "Eventos Corporativos", description: "Reuniones, conferencias, almuerzos ejecutivos y celebraciones de empresa" },
  { icon: PartyPopper, title: "Fiestas Privadas", description: "Cumpleaños, aniversarios, graduaciones y cualquier celebración especial" },
  { icon: Heart, title: "Bodas", description: "Desde la cena hasta estaciones de tacos para la fiesta" },
  { icon: Users, title: "Eventos Comunitarios", description: "Ferias, festivales y grandes reuniones" },
];

const packages = [
  {
    name: "Taquiza Básica",
    price: "Desde $15/persona",
    includes: ["3 tipos de proteína", "Tortillas de maíz y harina", "Salsas y guarniciones", "Platos y cubiertos"],
    minGuests: "20 personas mínimo",
  },
  {
    name: "Fiesta Mexicana",
    price: "Desde $25/persona",
    includes: ["5 tipos de proteína", "Guacamole y chips", "Arroz y frijoles", "Quesadillas", "Agua fresca", "Servicio incluido"],
    minGuests: "30 personas mínimo",
    popular: true,
  },
  {
    name: "Premium Experience",
    price: "Desde $40/persona",
    includes: ["Menú personalizado", "Estación de tacos en vivo", "Postres mexicanos", "Bebidas premium", "Chef dedicado", "Decoración temática"],
    minGuests: "50 personas mínimo",
  },
];

const Catering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${catering})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Catering
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-4 hero-text-shadow">
              Tu Evento, Nuestro Sabor
            </h1>
            <p className="text-lg md:text-xl text-card/90 mb-8">
              Hacemos de tu celebración un éxito con auténtica comida mexicana y servicio profesional.
            </p>
            <Link to="#quote">
              <Button variant="hero" size="xl">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Tipos de Eventos
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2 mb-4">
              Servimos Para Toda Ocasión
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <event.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Paquetes de Catering
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2 mb-4">
              Elige Tu Paquete
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ofrecemos diferentes opciones para adaptarnos a tu presupuesto y necesidades. 
              Todos los paquetes son personalizables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card relative ${
                  pkg.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                )}
                <h3 className="font-display text-3xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-primary font-bold text-2xl mb-2">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.minGuests}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={18} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="#quote">
                  <Button variant={pkg.popular ? "default" : "outline"} className="w-full" size="lg">
                    Cotizar
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cotización Gratis
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2">
              Cuéntanos Sobre Tu Evento
            </h2>
          </div>
          <ReservationForm serviceType="catering" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catering;
