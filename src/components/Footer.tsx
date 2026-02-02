import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Truck } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
                href="https://www.facebook.com/theburritomexicanfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/theburritomexicanfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://share.google/f7YmWxAMQ8sDBIlt7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 md:p-3 rounded-full hover:bg-primary transition-colors"
              >
                <GoogleIcon />
              </a>
              <a
                href="https://tiktok.com/@theburritomexicanfood"
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
              <li>
                <a
                  href="https://www.communityfoodtruckgroup.com/the-burrito-mexican-food-truck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-secondary transition-colors text-sm md:text-base flex items-center gap-2"
                >
                  <Truck size={14} />
                  Food Truck Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=3231+17+Ave+SE,+Calgary,+AB+T2A+0P9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-secondary text-sm md:text-base transition-colors"
                >
                  3231 17 Ave SE<br />
                  Calgary, AB T2A 0P9
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+14032488888" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  (403) 248-2888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:theburritomexicanfood@gmail.com" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  theburritomexicanfood@gmail.com
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
                  <p>Mon - Tue: 11am - 10pm</p>
                  <p className="text-secondary/80">Wed: Closed</p>
                  <p>Thu: 11am - 10pm</p>
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
              href="https://www.rcwinnovation.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Website developed by RCW Innovation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
