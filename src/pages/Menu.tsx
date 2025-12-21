import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSlider from "@/components/ImageSlider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroTacos from "@/assets/hero-tacos.jpg";
import restaurant from "@/assets/restaurant.jpg";
import catering from "@/assets/catering.jpg";
import { restaurantMenu, foodTruckMenu, MenuCategory } from "@/data/menuData";

const menuImages = [heroTacos, restaurant, catering];

const tables = Array.from({ length: 20 }, (_, i) => ({
  id: `table-${i + 1}`,
  name: `Table ${i + 1}`,
}));

type MenuType = "restaurant" | "foodtruck";

const Menu = () => {
  const [menuType, setMenuType] = useState<MenuType>("restaurant");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTable, setSelectedTable] = useState<string>("");

  const currentMenu: MenuCategory[] = menuType === "restaurant" ? restaurantMenu : foodTruckMenu;

  const filteredCategories = selectedCategory === "all"
    ? currentMenu
    : currentMenu.filter((cat) => cat.id === selectedCategory);

  const handleMenuTypeChange = (type: MenuType) => {
    setMenuType(type);
    setSelectedCategory("all");
  };

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

      {/* Menu Type Toggle */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleMenuTypeChange("restaurant")}
              className={`px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all ${
                menuType === "restaurant"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              🍽️ Restaurant Menu
            </button>
            <button
              onClick={() => handleMenuTypeChange("foodtruck")}
              className={`px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all ${
                menuType === "foodtruck"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              🚚 Food Truck Menu
            </button>
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
                {currentMenu.map((category) => (
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
