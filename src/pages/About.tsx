import { Star, Award, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import restaurant from "@/assets/restaurant.jpg";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Users, value: "10,000+", label: "Clientes Felices" },
  { icon: Star, value: "4.9", label: "Rating Promedio" },
  { icon: Award, value: "8+", label: "Años de Experiencia" },
  { icon: Heart, value: "100%", label: "Pasión Mexicana" },
];

const values = [
  {
    title: "Autenticidad",
    description: "Nuestras recetas vienen directamente de familias mexicanas, pasadas de generación en generación.",
  },
  {
    title: "Frescura",
    description: "Ingredientes frescos todos los días. Nuestras tortillas se hacen a mano cada mañana.",
  },
  {
    title: "Comunidad",
    description: "Somos más que un restaurante, somos parte de la comunidad de Toronto.",
  },
  {
    title: "Pasión",
    description: "Cada platillo es preparado con amor y el deseo de compartir la cultura mexicana.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nosotros
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-card hero-text-shadow">
            Nuestra Historia
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={logo} alt="The Burrito" className="w-64 mb-8" />
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Del Corazón de México a Toronto
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Burrito nació en 2015 con un sueño simple: llevar los sabores auténticos de México 
                  a las calles de Toronto. Lo que comenzó como un pequeño food truck se ha convertido 
                  en un referente de la cocina mexicana en la ciudad.
                </p>
                <p>
                  Nuestro fundador, originario de Guadalajara, trajo consigo las recetas de su abuela 
                  y la pasión por compartir la rica cultura culinaria mexicana. Cada taco, burrito 
                  y quesadilla es un homenaje a esas raíces.
                </p>
                <p>
                  Hoy, con nuestro restaurante, food truck y servicio de catering, seguimos 
                  comprometidos con la misma misión: ofrecer comida deliciosa, fresca y auténtica 
                  a todos los que buscan un pedacito de México.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center shadow-card"
                >
                  <stat.icon className="text-primary mx-auto mb-4" size={40} />
                  <p className="font-display text-4xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Lo Que Nos Define
            </span>
            <h2 className="font-display text-5xl text-foreground mt-2">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span className="font-display text-2xl text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl mb-6">
            ¿Listo Para Probar?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Ven a visitarnos al restaurante, encuéntranos en el food truck o déjanos hacer 
            de tu próximo evento algo especial con nuestro catering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/restaurant" className="inline-block">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/90 transition-colors shadow-lg">
                Reservar Mesa
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-colors">
                Contáctanos
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
