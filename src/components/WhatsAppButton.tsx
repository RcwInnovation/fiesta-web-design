import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "14161234567";
  const message = encodeURIComponent("¡Hola! Me gustaría hacer un pedido en The Burrito 🌮");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
