import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Restaurante", path: "/restaurant" },
  { name: "Food Truck", path: "/food-truck" },
  { name: "Catering", path: "/catering" },
  { name: "Menú", path: "/menu" },
  { name: "Nosotros", path: "/about" },
  { name: "Contacto", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCtaButton = () => {
    switch (location.pathname) {
      case "/restaurant":
        return { text: "Reservar Mesa", path: "/contact?type=restaurant" };
      case "/food-truck":
        return { text: "Ordenar Ahora", path: "/contact?type=foodtruck" };
      case "/catering":
        return { text: "Cotizar Evento", path: "/contact?type=catering" };
      default:
        return { text: "Ordenar Ahora", path: "/contact" };
    }
  };

  const cta = getCtaButton();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="The Burrito Mexican Food"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : isScrolled
                  ? "text-foreground"
                  : "text-card"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link to={cta.path}>
            <Button variant="hero" size="lg">
              {cta.text}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-card"}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-slide-up">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to={cta.path} onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="hero" size="lg" className="w-full mt-4">
                {cta.text}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
