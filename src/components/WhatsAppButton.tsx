import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/14034019412?text=Hi%20I%E2%80%99m%20interested%20in%20The%20Burrito%20services";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="md:w-7 md:h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
