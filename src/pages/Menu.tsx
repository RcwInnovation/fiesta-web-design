import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSlider from "@/components/ImageSlider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroTacos from "@/assets/hero-tacos.jpg";
import restaurant from "@/assets/restaurant.jpg";
import catering from "@/assets/catering.jpg";

// Menu item images
import tacosPastor from "@/assets/menu/tacos-pastor.jpg";
import tacosCarnitas from "@/assets/menu/tacos-carnitas.jpg";
import tacosPollo from "@/assets/menu/tacos-pollo.jpg";
import burrito from "@/assets/menu/burrito.jpg";
import burritoBowl from "@/assets/menu/burrito-bowl.jpg";
import quesadilla from "@/assets/menu/quesadilla.jpg";
import guacamole from "@/assets/menu/guacamole.jpg";
import nachos from "@/assets/menu/nachos.jpg";
import elote from "@/assets/menu/elote.jpg";
import horchata from "@/assets/menu/horchata.jpg";
import jamaica from "@/assets/menu/jamaica.jpg";
import margarita from "@/assets/menu/margarita.jpg";

const menuCategories = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "All breakfasts include a portion of seasonal fruit",
    items: [
      { name: "Canadian Combo", price: "$13.65", description: "Eggs, bacon, pancakes with butter and maple syrup", image: tacosPastor },
      { name: "Breakfast Burrito", price: "$13.65", description: "Three scrambled eggs, bacon, pico de gallo and refried beans in a flour tortilla", image: burrito },
      { name: "Omelette", price: "$15.75", description: "3-egg omelette filled with peppers, onion and ham. Beans and potatoes", image: quesadilla },
      { name: "Chilaquiles", price: "$15.75", description: "Homemade chips bathed in green or red salsa, cream, onion, cheese and protein of choice", image: nachos },
      { name: "Mexican Breakfast", price: "$13.65", description: "Three eggs any style, refried beans and homemade tortillas", image: tacosCarnitas },
    ],
  },
  {
    id: "food-truck",
    name: "From the Food Truck",
    description: "Our most popular dishes, now at the restaurant",
    items: [
      { name: "Tacos (3)", price: "$17.85", description: "3 soft tortillas with your favorite filling, cilantro and onion", image: tacosPastor },
      { name: "Burrito", price: "$16.80", description: "Large flour tortilla with rice, beans, protein and toppings", image: burrito },
      { name: "Burrito Bowl", price: "$16.80", description: "Everything from the burrito but in a bowl, no tortilla", image: burritoBowl },
      { name: "Torta", price: "$18.90", description: "Homemade bread with mayo, beans, protein, lettuce, tomato, avocado and cream", image: quesadilla },
      { name: "Quesadilla", price: "$16.80", description: "Large tortilla with melted cheese and your favorite protein", image: quesadilla },
      { name: "Nachos", price: "$18.90", description: "Chips with beans, protein, melted cheese, pico de gallo and cream", image: nachos },
      { name: "Quesabirria", price: "$19.95", description: "3 fried tortillas with mozzarella cheese, birria, cilantro and onion. Consomé included", image: tacosCarnitas },
    ],
  },
  {
    id: "proteins",
    name: "Available Proteins",
    description: "Choose your favorite for any dish",
    items: [
      { name: "Carnitas", price: "", description: "Slow-cooked pulled pork", image: tacosCarnitas },
      { name: "Cochinita Pibil", price: "", description: "Pork in achiote marinade Yucatan style", image: tacosPastor },
      { name: "Birria", price: "", description: "Tender beef in guajillo sauce", image: tacosCarnitas },
      { name: "Steak", price: "", description: "Seasoned grilled beef", image: tacosPollo },
      { name: "Tinga", price: "", description: "Shredded chicken in tomato chipotle sauce", image: tacosPollo },
      { name: "Vegetarian", price: "", description: "Squash, corn, tomato and onion stew", image: elote },
    ],
  },
  {
    id: "soups-plates",
    name: "Soups & Plates",
    description: "Each dish includes rice, beans and tortillas",
    items: [
      { name: "Birria en Consomé", price: "$21.00", description: "Shredded meat in dried chili and aromatic spice broth", image: tacosCarnitas },
      { name: "Enchiladas", price: "$15.75", description: "3 chicken-filled tortillas bathed in green salsa, lettuce, cream and cheese", image: quesadilla },
      { name: "Flautas", price: "$15.75", description: "3 fried tortillas filled with potato, beans, lettuce, cream and cheese", image: nachos },
      { name: "Carne Asada", price: "$23.10", description: "Grilled beef cut with grilled onions and nopales", image: tacosPollo },
      { name: "Fajitas", price: "$22.05", description: "Strips of beef or chicken with sautéed peppers and onions", image: burritoBowl },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    description: "For the little ones in the family",
    items: [
      { name: "Canadian Combito", price: "$5.25", description: "2 pancakes with butter, syrup and 2 bacon strips", image: quesadilla },
      { name: "Cheese Quesadilla", price: "$8.40", description: "Flour tortilla with mozzarella cheese and french fries", image: quesadilla },
      { name: "Chicken Strips", price: "$8.40", description: "Breaded chicken strips with french fries", image: tacosPollo },
      { name: "Cheese Burger", price: "$8.40", description: "Burger with american cheese and french fries", image: burrito },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    description: "Start your meal with our delicious starters",
    items: [
      { name: "Guacamole & Chips", price: "$9.50", description: "Fresh guacamole made tableside with tortilla chips", image: guacamole },
      { name: "Elote", price: "$6.50", description: "Mexican street corn with mayo, cotija cheese and chili", image: elote },
      { name: "Loaded Nachos", price: "$12.00", description: "Chips with all the toppings, beans, cheese, jalapeños", image: nachos },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing options to accompany your meal",
    items: [
      { name: "Horchata", price: "$4.50", description: "Traditional rice milk with cinnamon", image: horchata },
      { name: "Jamaica", price: "$4.50", description: "Hibiscus flower tea, sweet and refreshing", image: jamaica },
      { name: "Tamarindo", price: "$4.50", description: "Sweet and tangy tamarind drink", image: jamaica },
      { name: "Mexican Sodas", price: "$3.50", description: "Jarritos, Mexican Coke", image: horchata },
      { name: "Margarita", price: "$10.00", description: "Classic, strawberry or mango", image: margarita },
      { name: "Michelada", price: "$9.00", description: "Prepared with our secret recipe", image: margarita },
      { name: "Beer", price: "$6.00", description: "Corona, Modelo, Pacifico", image: margarita },
    ],
  },
];

const menuImages = [heroTacos, restaurant, catering];

const tables = Array.from({ length: 20 }, (_, i) => ({
  id: `table-${i + 1}`,
  name: `Table ${i + 1}`,
}));

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTable, setSelectedTable] = useState<string>("");

  const filteredCategories = selectedCategory === "all"
    ? menuCategories
    : menuCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTacos})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Our Menu
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-card hero-text-shadow">
            Authentic Flavors
          </h1>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-12 md:py-16 bg-corn-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={menuImages} alt="Menu dishes" />
          </div>
        </div>
      </section>

      {/* Category Filter & Table Select */}
      <section className="py-6 md:py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
            {/* Category Buttons */}
            <div className="w-full lg:flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-3 pb-2 lg:pb-0 min-w-max lg:flex-wrap lg:justify-center">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  All
                </button>
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Select */}
            <div className="w-full lg:w-auto">
              <Select value={selectedTable} onValueChange={setSelectedTable}>
                <SelectTrigger className="w-full lg:w-48 bg-card border-border">
                  <SelectValue placeholder="Select Table" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {tables.map((table) => (
                    <SelectItem key={table.id} value={table.id}>
                      {table.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          {filteredCategories.map((category, catIndex) => (
            <div key={category.id} className="mb-12 md:mb-16 last:mb-0">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-all hover:-translate-y-1 group"
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.price && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-display text-lg md:text-xl shadow-lg">
                          {item.price}
                        </div>
                      )}
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="font-semibold text-base md:text-lg text-foreground mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {catIndex < filteredCategories.length - 1 && (
                <div className="mt-12 md:mt-16 flex justify-center">
                  <div className="w-24 h-1 bg-secondary rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Menu;
