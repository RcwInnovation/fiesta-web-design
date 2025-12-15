import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="The Burrito" className="h-20 w-auto" />
            <p className="text-background/80 text-sm leading-relaxed">
              Auténtica comida mexicana preparada con amor y los ingredientes más frescos. 
              Desde nuestro restaurante, food truck o servicio de catering.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Restaurante", path: "/restaurant" },
                { name: "Food Truck", path: "/food-truck" },
                { name: "Catering", path: "/catering" },
                { name: "Menú", path: "/menu" },
                { name: "Nosotros", path: "/about" },
                { name: "Contacto", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-2xl mb-6">Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  123 Calle Principal, Toronto, ON M5V 2K1
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+14161234567" className="text-background/80 hover:text-secondary">
                  +1 (416) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@theburrito.ca" className="text-background/80 hover:text-secondary">
                  info@theburrito.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-2xl mb-6">Horarios</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  <p className="font-medium text-background">Restaurante</p>
                  <p>Lun - Jue: 11am - 10pm</p>
                  <p>Vie - Sáb: 11am - 11pm</p>
                  <p>Dom: 12pm - 9pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} The Burrito Mexican Food. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link to="/privacy" className="hover:text-secondary">Privacidad</Link>
            <Link to="/terms" className="hover:text-secondary">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
