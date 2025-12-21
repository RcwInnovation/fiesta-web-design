import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="space-y-4">
            <img src={logo} alt="The Burrito" className="h-16 md:h-20 w-auto" />
            <p className="text-background/80 text-sm leading-relaxed">
              Authentic Mexican food made with love and the freshest ingredients. 
              From our restaurant, food truck or catering service.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Restaurant", path: "/restaurant" },
                { name: "Food Truck", path: "/food-truck" },
                { name: "Catering", path: "/catering" },
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-secondary transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-background/80 text-sm md:text-base">
                  123 Stephen Avenue SW<br />
                  Calgary, AB T2P 1G8
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+14034019412" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  +1 (403) 401-9412
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:rcwluna@gmail.com" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  rcwluna@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Hours</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-background/80 text-sm md:text-base">
                  <p className="font-medium text-background">Restaurant</p>
                  <p>Mon - Thu: 11am - 10pm</p>
                  <p>Fri - Sat: 11am - 11pm</p>
                  <p>Sun: 12pm - 9pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-custom py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-background/60 text-xs md:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} The Burrito Mexican Food. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 text-xs md:text-sm text-background/60">
            <div className="flex gap-4 md:gap-6">
              <Link to="/privacy" className="hover:text-secondary">Privacy</Link>
              <Link to="/terms" className="hover:text-secondary">Terms</Link>
            </div>
            <a
              href="https://rcwinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Created by Rcw Innovation Inc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
