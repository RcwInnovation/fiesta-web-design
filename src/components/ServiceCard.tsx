import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  cta: string;
}

const ServiceCard = ({ image, title, description, link, cta }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-display text-3xl md:text-4xl text-card mb-2">{title}</h3>
        <p className="text-card/80 mb-4 line-clamp-2">{description}</p>
        <Link to={link}>
          <Button variant="hero" size="lg" className="group-hover:scale-105 transition-transform">
            {cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
