import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReservationModal from "@/components/ReservationModal";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Restaurant", path: "/restaurant" },
  { name: "Food Truck", path: "/food-truck" },
  { name: "Catering", path: "/catering" },
  { name: "Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCtaInfo = (): { text: string; type: "restaurant" | "foodtruck" | "catering" } => {
    switch (location.pathname) {
      case "/restaurant":
        return { text: "Book a Table", type: "restaurant" };
      case "/food-truck":
        return { text: "Order Now", type: "foodtruck" };
      case "/catering":
        return { text: "Get a Quote", type: "catering" };
      default:
        return { text: "Order Now", type: "restaurant" };
    }
  };

  const cta = getCtaInfo();

  const handleCtaClick = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-3 md:py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="The Burrito Mexican Food"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm xl:text-base transition-colors duration-200 hover:text-primary ${
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

          <div className="hidden lg:block">
            <Button variant="hero" size="lg" onClick={handleCtaClick}>
              {cta.text}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-card"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card backdrop-blur-lg border-t border-border animate-slide-up shadow-lg">
            <nav className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-primary-foreground bg-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" size="lg" className="w-full mt-4" onClick={handleCtaClick}>
                {cta.text}
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={cta.type}
      />
    </>
  );
};

export default Header;
