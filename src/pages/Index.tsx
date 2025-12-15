import { Star, MapPin, Clock, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import ReservationForm from "@/components/ReservationForm";
import restaurant from "@/assets/restaurant.jpg";
import foodTruck from "@/assets/food-truck.jpg";
import catering from "@/assets/catering.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";

const features = [
  {
    icon: Utensils,
    title: "Recetas Auténticas",
    description: "Preparadas con amor siguiendo tradiciones familiares mexicanas",
  },
  {
    icon: Star,
    title: "Ingredientes Frescos",
    description: "Solo usamos los ingredientes más frescos y de la mejor calidad",
  },
  {
    icon: MapPin,
    title: "Múltiples Ubicaciones",
    description: "Restaurante fijo, food truck móvil o catering para eventos",
  },
  {
    icon: Clock,
    title: "Servicio Rápido",
    description: "Comida deliciosa sin largas esperas, perfecta para tu día",
  },
];

const testimonials = [
  {
    name: "María González",
    role: "Cliente Frecuente",
    text: "Los mejores tacos que he probado fuera de México. El sabor es increíble y el servicio siempre es excelente.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Evento Corporativo",
    text: "Contratamos su catering para un evento de 100 personas y todos quedaron encantados. ¡Altamente recomendado!",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Food Truck Regular",
    text: "Siempre busco el food truck cuando pasa por mi zona. Los burritos son enormes y deliciosos.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Slider - ATTENTION */}
      <HeroSlider />

      {/* Services Section - INTEREST */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-4">
              Elige Tu Experiencia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ya sea que busques una cena romántica, comida rápida al paso o catering para tu evento especial, 
              tenemos la opción perfecta para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              image={restaurant}
              title="Restaurante"
              description="Vive la experiencia completa en nuestro acogedor restaurante con ambiente familiar."
              link="/restaurant"
              cta="Reservar Mesa"
            />
            <ServiceCard
              image={foodTruck}
              title="Food Truck"
              description="Encuentra nuestro colorido food truck en eventos y ubicaciones por toda la ciudad."
              link="/food-truck"
              cta="Ver Ubicaciones"
            />
            <ServiceCard
              image={catering}
              title="Catering"
              description="Llevamos la fiesta mexicana a tu evento con menús personalizados y servicio profesional."
              link="/catering"
              cta="Solicitar Cotización"
            />
          </div>
        </div>
      </section>

      {/* Features Section - DESIRE */}
      <section className="py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              ¿Por Qué Elegirnos?
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
              Sabor Que Conquista
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={heroTacos}
                alt="Deliciosos tacos mexicanos"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-lg">
                <p className="font-display text-4xl">$17.85</p>
                <p className="font-medium">3 Tacos Especiales</p>
              </div>
            </div>

            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Del Food Truck a Tu Mesa
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-6">
                Nuestros Platillos Estrella
              </h2>
              <p className="text-muted-foreground mb-6">
                Desde tacos de carnitas hasta burritos de birria, cada platillo está 
                preparado con ingredientes frescos y recetas tradicionales que han pasado 
                de generación en generación.
              </p>
              <ul className="space-y-3 mb-8">
                {["Carnitas (pulled pork)", "Birria (tender beef)", "Cochinita Pibil", "Tinga de Pollo"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/menu" className="inline-block">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg">
                  Ver Menú Completo
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-foreground text-card">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-card mt-2">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-card/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-card/90 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-card">{testimonial.name}</p>
                  <p className="text-card/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section - ACTION */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                ¿Listo Para Ordenar?
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-6">
                Haz Tu Reservación Hoy
              </h2>
              <p className="text-muted-foreground mb-8">
                No esperes más para disfrutar de la auténtica comida mexicana. 
                Reserva tu mesa, ordena para recoger o solicita una cotización 
                para tu próximo evento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario Extendido</p>
                    <p className="text-muted-foreground text-sm">Abiertos hasta las 11pm los fines de semana</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación Céntrica</p>
                    <p className="text-muted-foreground text-sm">Fácil acceso y estacionamiento disponible</p>
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
    </div>
  );
};

export default Index;
