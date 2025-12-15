import { useState } from "react";
import { Calendar, Clock, Users, User, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ReservationFormProps {
  serviceType?: "restaurant" | "foodtruck" | "catering";
}

const ReservationForm = ({ serviceType = "restaurant" }: ReservationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Solicitud Enviada!",
      description: "Nos pondremos en contacto contigo pronto para confirmar tu reservación.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const getTitle = () => {
    switch (serviceType) {
      case "restaurant":
        return "Reserva tu Mesa";
      case "foodtruck":
        return "Ordena para Recoger";
      case "catering":
        return "Solicita una Cotización";
      default:
        return "Contáctanos";
    }
  };

  const getSubtitle = () => {
    switch (serviceType) {
      case "restaurant":
        return "Asegura tu lugar para una experiencia gastronómica inolvidable";
      case "foodtruck":
        return "Haz tu pedido y pasa a recogerlo sin esperas";
      case "catering":
        return "Cuéntanos sobre tu evento y te prepararemos una propuesta a tu medida";
      default:
        return "Estamos aquí para ayudarte";
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="font-display text-4xl text-foreground mb-2">{getTitle()}</h3>
        <p className="text-muted-foreground">{getSubtitle()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="pl-12 h-12"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              name="phone"
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="pl-12 h-12"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="pl-12 h-12"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="pl-12 h-12"
              required
            />
          </div>

          {/* Time */}
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="pl-12 h-12"
              required
            />
          </div>

          {/* Guests */}
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              name="guests"
              type="number"
              placeholder="# Personas"
              min="1"
              max="100"
              value={formData.guests}
              onChange={handleChange}
              className="pl-12 h-12"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
          <Textarea
            name="message"
            placeholder={
              serviceType === "catering"
                ? "Cuéntanos sobre tu evento: tipo de celebración, preferencias de menú, restricciones dietéticas..."
                : "Comentarios adicionales o solicitudes especiales..."
            }
            value={formData.message}
            onChange={handleChange}
            className="pl-12 min-h-[120px] resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : serviceType === "catering" ? "Solicitar Cotización" : "Confirmar Reservación"}
        </Button>
      </form>
    </div>
  );
};

export default ReservationForm;
