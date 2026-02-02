import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReservationForm from "@/components/ReservationForm";
import ReservationModal from "@/components/ReservationModal";
import ImageSlider from "@/components/ImageSlider";
import foodTruck1 from "@/assets/food-truck-1.jpg";
import foodTruck2 from "@/assets/food-truck-2.jpg";
import heroTacos from "@/assets/hero-tacos.jpg";
import { foodTruckMenu } from "@/data/menuData";

const locations = [
  { day: "Monday", location: "Downtown - Stephen Avenue", time: "11:00 AM - 3:00 PM" },
  { day: "Tuesday", location: "Kensington - 10th Street NW", time: "11:00 AM - 3:00 PM" },
  { day: "Wednesday", location: "Beltline - 17th Avenue SW", time: "11:00 AM - 3:00 PM" },
  { day: "Thursday", location: "Inglewood - 9th Avenue SE", time: "11:00 AM - 3:00 PM" },
  { day: "Friday", location: "East Village", time: "11:00 AM - 10:00 PM" },
  { day: "Saturday", location: "Calgary Farmers' Market", time: "10:00 AM - 6:00 PM" },
];

// Get highlights from food truck menu
const menuHighlights = [
  { name: "3 Tacos", price: "$17.85", description: "Corn or flour tortillas with your favorite filling" },
  { name: "Quesa-Birria", price: "$19.95", description: "3 fried tortillas with cheese, birria and consomé" },
  { name: "Burrito", price: "$16.80", description: "Large and flavorful with rice, beans and protein" },
  { name: "Nachos", price: "$18.90", description: "Chips with beans, protein, melted cheese and pico de gallo" },
];

const foodTruckImages = [foodTruck1, foodTruck2, heroTacos];
const menuImages = [heroTacos, foodTruck1, foodTruck2];

const FoodTruck = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = selectedCategory === "all"
    ? foodTruckMenu
    : foodTruckMenu.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foodTruck1})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-xl md:max-w-2xl text-card">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Food Truck
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-4 hero-text-shadow">
              Mexican Flavor on the Move
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-card/90 mb-6 md:mb-8">
              We bring authentic Mexican flavors directly to your location. Find us throughout Calgary.
            </p>
            <Link to="#locations">
              <Button variant="hero" size="lg">
                See Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Our Food Truck
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Street Food at Its Finest
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={foodTruckImages} alt="Food truck" />
          </div>
          
          {/* Community Link */}
          <div className="mt-8 text-center">
            <a 
              href="https://www.communityfoodtruckgroup.com/the-burrito-mexican-food-truck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/20 transition-colors"
            >
              <Truck size={20} />
              Find us on Community Food Truck Group
            </a>
          </div>
        </div>
      </section>

      {/* Food Truck Menu */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Our Menu
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-4">
              🚚 Food Truck Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick, delicious, and authentic Mexican street food
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 md:gap-3 pb-2 min-w-max justify-center flex-wrap">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                All
              </button>
              {foodTruckMenu.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          {filteredCategories.map((category, catIndex) => (
            <div key={category.id} className="mb-10 md:mb-14 last:mb-0">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-all hover:-translate-y-1 group"
                  >
                    <div className="relative h-36 md:h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.price && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-display text-lg shadow-lg">
                          {item.price}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-base md:text-lg text-foreground mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {catIndex < filteredCategories.length - 1 && (
                <div className="mt-10 flex justify-center">
                  <div className="w-20 h-1 bg-secondary rounded-full" />
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 text-center">
            <Link to="/menu">
              <Button variant="default" size="lg">
                View Full Restaurant Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Find Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-3 md:mb-4">
              Weekly Locations
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base px-4">
              We visit different spots around Calgary each day. Follow us on social media for real-time updates!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 md:p-6 shadow-card hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground">{loc.day}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                    <MapPin size={14} className="text-accent flex-shrink-0" />
                    <span>{loc.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                    <Clock size={14} className="text-secondary flex-shrink-0" />
                    <span>{loc.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-secondary/20 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Truck className="text-primary" size={20} />
              <span className="text-foreground font-medium text-sm md:text-base">
                Also available for private events
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Order */}
      <section className="py-12 md:py-20 bg-corn-light">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Order Now
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
              Order for Pickup
            </h2>
          </div>
          <ReservationForm serviceType="foodtruck" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceType="foodtruck"
      />
    </div>
  );
};

export default FoodTruck;
