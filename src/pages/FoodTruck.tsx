import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import foodTruck from "@/assets/food-truck.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";

const locations = [
  { day: "Lunes", location: "Downtown - King St & Bay St", time: "11:00 AM - 3:00 PM" },
  { day: "Martes", location: "Financial District - Adelaide St", time: "11:00 AM - 3:00 PM" },
  { day: "Miércoles", location: "Queen's Park - University Ave", time: "11:00 AM - 3:00 PM" },
  { day: "Jueves", location: "Yorkville - Bloor St", time: "11:00 AM - 3:00 PM" },
  { day: "Viernes", location: "Entertainment District", time: "11:00 AM - 10:00 PM" },
  { day: "Sábado", location: "St. Lawrence Market Area", time: "10:00 AM - 6:00 PM" },
];

const menuHighlights = [
  { name: "Tacos (3)", price: "$17.85", description: "Tortillas de maíz o harina con tu relleno favorito" },
  { name: "Burrito", price: "$16.80", description: "Grande y lleno de sabor con arroz, frijoles y proteína" },
  { name: "Quesabirria", price: "$19.95", description: "3 tortillas fritas con queso, birria y consomé" },
  { name: "Nachos", price: "$18.90", description: "Totopos con frijoles, proteína, queso fundido y pico de gallo" },
];

const FoodTruck = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foodTruck})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Food Truck
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-4 hero-text-shadow">
              Sabor Mexicano en Movimiento
            </h1>
            <p className="text-lg md:text-xl text-card/90 mb-8">
              Llevamos los auténticos sabores de México directamente a tu ubicación. Encuéntranos por toda la ciudad.
            </p>
            <Link to="#locations">
              <Button variant="hero" size="xl">
                Ver Ubicaciones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Encuéntranos
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2 mb-4">
              Ubicaciones Semanales
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visitamos diferentes puntos de la ciudad cada día. ¡Síguenos en redes sociales para actualizaciones en tiempo real!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{loc.day}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-accent" />
                    <span>{loc.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} className="text-secondary" />
                    <span>{loc.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-secondary/20 px-6 py-3 rounded-full">
              <Truck className="text-primary" size={24} />
              <span className="text-foreground font-medium">
                También disponible para eventos privados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-corn-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Menú del Food Truck
              </span>
              <h2 className="font-display text-5xl text-foreground mt-2 mb-6">
                Favoritos de la Calle
              </h2>
              <p className="text-muted-foreground mb-8">
                Nuestro menú del food truck está diseñado para servir rápido sin comprometer el sabor. 
                Cada platillo es preparado al momento con ingredientes frescos.
              </p>

              <div className="space-y-4">
                {menuHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-5 flex justify-between items-start shadow-sm"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-display text-2xl text-primary">{item.price}</span>
                  </div>
                ))}
              </div>

              <Link to="/menu" className="inline-block mt-8">
                <Button variant="default" size="lg">
                  Ver Menú Completo
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src={heroTacos}
                alt="Food Truck Menu"
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order */}
      <section className="py-20 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Ordena Ahora
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2">
              Pide para Recoger
            </h2>
          </div>
          <ReservationForm serviceType="foodtruck" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FoodTruck;
