import { useState } from "react";
import { Calendar, Clock, Users, User, Phone, Mail, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: "restaurant" | "foodtruck" | "catering";
}

const ReservationModal = ({ isOpen, onClose, serviceType = "restaurant" }: ReservationModalProps) => {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        serviceType === "catering" 
          ? "Catering Quote Request - The Burrito" 
          : serviceType === "foodtruck"
          ? "Food Truck Order - The Burrito"
          : "Table Reservation - The Burrito"
      );
      
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time}\n` +
        `Guests: ${formData.guests}\n` +
        `Message: ${formData.message || "N/A"}`
      );

      window.location.href = `mailto:rcwluna@gmail.com?subject=${subject}&body=${body}`;

      toast({
        title: "Request Sent!",
        description: "We'll contact you soon to confirm your reservation.",
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
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    switch (serviceType) {
      case "restaurant":
        return "Book Your Table";
      case "foodtruck":
        return "Order for Pickup";
      case "catering":
        return "Request a Quote";
      default:
        return "Contact Us";
    }
  };

  const getSubtitle = () => {
    switch (serviceType) {
      case "restaurant":
        return "Reserve your spot for an unforgettable dining experience";
      case "foodtruck":
        return "Place your order and pick it up without waiting";
      case "catering":
        return "Tell us about your event and we'll create a custom proposal";
      default:
        return "We're here to help";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-foreground">{getTitle()}</DialogTitle>
          <p className="text-muted-foreground text-sm">{getSubtitle()}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 h-11"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 h-11"
                required
              />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 h-11"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="pl-10 h-11"
                required
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="pl-10 h-11"
                required
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                name="guests"
                type="number"
                placeholder="# Guests"
                min="1"
                max="100"
                value={formData.guests}
                onChange={handleChange}
                className="pl-10 h-11"
                required
              />
            </div>
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={16} />
            <Textarea
              name="message"
              placeholder={
                serviceType === "catering"
                  ? "Tell us about your event: type of celebration, menu preferences, dietary restrictions..."
                  : "Additional comments or special requests..."
              }
              value={formData.message}
              onChange={handleChange}
              className="pl-10 min-h-[80px] resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? "Sending..." 
              : serviceType === "catering" 
              ? "Request Quote" 
              : "Confirm Reservation"
            }
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
