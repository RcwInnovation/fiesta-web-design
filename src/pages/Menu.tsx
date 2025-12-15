import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSlider from "@/components/ImageSlider";
import heroTacos from "@/assets/hero-tacos.jpg";
import restaurant from "@/assets/restaurant.jpg";
import catering from "@/assets/catering.jpg";

const menuCategories = [
  {
    name: "Breakfast",
    description: "All breakfasts include a portion of seasonal fruit",
    items: [
      { name: "Canadian Combo", price: "$13.65", description: "Eggs, bacon, pancakes with butter and maple syrup" },
      { name: "Breakfast Burrito", price: "$13.65", description: "Three scrambled eggs, bacon, pico de gallo and refried beans in a flour tortilla" },
      { name: "Omelette", price: "$15.75", description: "3-egg omelette filled with peppers, onion and ham. Beans and potatoes" },
      { name: "Chilaquiles", price: "$15.75", description: "Homemade chips bathed in green or red salsa, cream, onion, cheese and protein of choice" },
      { name: "Mexican Breakfast", price: "$13.65", description: "Three eggs any style, refried beans and homemade tortillas" },
    ],
  },
  {
    name: "From the Food Truck",
    description: "Our most popular dishes, now at the restaurant",
    items: [
      { name: "Tacos (3)", price: "$17.85", description: "3 soft tortillas with your favorite filling, cilantro and onion" },
      { name: "Burrito", price: "$16.80", description: "Large flour tortilla with rice, beans, protein and toppings" },
      { name: "Burrito Bowl", price: "$16.80", description: "Everything from the burrito but in a bowl, no tortilla" },
      { name: "Torta", price: "$18.90", description: "Homemade bread with mayo, beans, protein, lettuce, tomato, avocado and cream" },
      { name: "Quesadilla", price: "$16.80", description: "Large tortilla with melted cheese and your favorite protein" },
      { name: "Nachos", price: "$18.90", description: "Chips with beans, protein, melted cheese, pico de gallo and cream" },
      { name: "Quesabirria", price: "$19.95", description: "3 fried tortillas with mozzarella cheese, birria, cilantro and onion. Consomé included" },
    ],
  },
  {
    name: "Available Proteins",
    description: "Choose your favorite for any dish",
    items: [
      { name: "Carnitas", price: "", description: "Slow-cooked pulled pork" },
      { name: "Cochinita Pibil", price: "", description: "Pork in achiote marinade Yucatan style" },
      { name: "Birria", price: "", description: "Tender beef in guajillo sauce" },
      { name: "Steak", price: "", description: "Seasoned grilled beef" },
      { name: "Tinga", price: "", description: "Shredded chicken in tomato chipotle sauce" },
      { name: "Vegetarian", price: "", description: "Squash, corn, tomato and onion stew" },
    ],
  },
  {
    name: "Soups & Plates",
    description: "Each dish includes rice, beans and tortillas",
    items: [
      { name: "Birria en Consomé", price: "$21.00", description: "Shredded meat in dried chili and aromatic spice broth" },
      { name: "Enchiladas", price: "$15.75", description: "3 chicken-filled tortillas bathed in green salsa, lettuce, cream and cheese" },
      { name: "Flautas", price: "$15.75", description: "3 fried tortillas filled with potato, beans, lettuce, cream and cheese" },
      { name: "Carne Asada", price: "$23.10", description: "Grilled beef cut with grilled onions and nopales" },
      { name: "Fajitas", price: "$22.05", description: "Strips of beef or chicken with sautéed peppers and onions" },
    ],
  },
  {
    name: "Kids Menu",
    description: "For the little ones in the family",
    items: [
      { name: "Canadian Combito", price: "$5.25", description: "2 pancakes with butter, syrup and 2 bacon strips" },
      { name: "Cheese Quesadilla", price: "$8.40", description: "Flour tortilla with mozzarella cheese and french fries" },
      { name: "Chicken Strips", price: "$8.40", description: "Breaded chicken strips with french fries" },
      { name: "Cheese Burger", price: "$8.40", description: "Burger with american cheese and french fries" },
    ],
  },
  {
    name: "Drinks",
    description: "Refreshing options to accompany your meal",
    items: [
      { name: "Agua Fresca", price: "$4.50", description: "Jamaica, horchata or tamarind" },
      { name: "Mexican Sodas", price: "$3.50", description: "Jarritos, Mexican Coke" },
      { name: "Beer", price: "$6.00", description: "Corona, Modelo, Pacifico" },
      { name: "Margarita", price: "$10.00", description: "Classic, strawberry or mango" },
      { name: "Michelada", price: "$9.00", description: "Prepared with our secret recipe" },
    ],
  },
];

const menuImages = [heroTacos, restaurant, catering];

const Menu = () => {
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

      {/* Menu */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 md:mb-16 last:mb-0">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl p-4 md:p-6 shadow-sm hover:shadow-card transition-shadow flex justify-between gap-3 md:gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-base md:text-lg text-foreground mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                    </div>
                    {item.price && (
                      <span className="font-display text-xl md:text-2xl text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {catIndex < menuCategories.length - 1 && (
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
