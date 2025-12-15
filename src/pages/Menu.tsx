import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroTacos from "@/assets/hero-tacos.jpg";

const menuCategories = [
  {
    name: "Desayunos",
    description: "Todos los desayunos incluyen una porción de fruta de temporada",
    items: [
      { name: "Canadian Combo", price: "$13.65", description: "Huevos, bacon, pancakes con mantequilla y maple syrup" },
      { name: "Breakfast Burrito", price: "$13.65", description: "Tres huevos revueltos, bacon, pico de gallo y frijoles refritos en tortilla de harina" },
      { name: "Omelette", price: "$15.75", description: "Omelette de 3 huevos relleno de pimientos, cebolla y jamón. Frijoles y papas" },
      { name: "Chilaquiles", price: "$15.75", description: "Totopos caseros bañados en salsa verde o roja, crema, cebolla, queso y proteína a elegir" },
      { name: "Mexican Breakfast", price: "$13.65", description: "Tres huevos al gusto, frijoles refritos y tortillas caseras" },
    ],
  },
  {
    name: "Del Food Truck",
    description: "Nuestros platillos más populares, ahora en el restaurante",
    items: [
      { name: "Tacos (3)", price: "$17.85", description: "3 tortillas suaves con tu relleno favorito, cilantro y cebolla" },
      { name: "Burrito", price: "$16.80", description: "Gran tortilla de harina con arroz, frijoles, proteína y toppings" },
      { name: "Burrito Bowl", price: "$16.80", description: "Todo lo del burrito pero en bowl, sin tortilla" },
      { name: "Torta", price: "$18.90", description: "Pan casero con mayo, frijoles, proteína, lechuga, tomate, aguacate y crema" },
      { name: "Quesadilla", price: "$16.80", description: "Tortilla grande con queso derretido y tu proteína favorita" },
      { name: "Nachos", price: "$18.90", description: "Totopos con frijoles, proteína, queso fundido, pico de gallo y crema" },
      { name: "Quesabirria", price: "$19.95", description: "3 tortillas fritas con queso mozzarella, birria, cilantro y cebolla. Consomé incluido" },
    ],
  },
  {
    name: "Proteínas Disponibles",
    description: "Elige tu favorita para cualquier platillo",
    items: [
      { name: "Carnitas", price: "", description: "Cerdo deshebrado cocido lentamente" },
      { name: "Cochinita Pibil", price: "", description: "Cerdo en adobo de achiote estilo Yucatán" },
      { name: "Birria", price: "", description: "Res tierna en salsa de guajillo" },
      { name: "Steak", price: "", description: "Carne asada sazonada" },
      { name: "Tinga", price: "", description: "Pollo deshebrado en salsa de tomate y chipotle" },
      { name: "Vegetariano", price: "", description: "Guiso de calabaza, elote, tomate y cebolla" },
    ],
  },
  {
    name: "Sopas y Platillos",
    description: "Cada platillo incluye arroz, frijoles y tortillas",
    items: [
      { name: "Birria en Consomé", price: "$21.00", description: "Carne deshebrada en caldo de chiles secos y especias aromáticas" },
      { name: "Enchiladas", price: "$15.75", description: "3 tortillas rellenas de pollo, bañadas en salsa verde, lechuga, crema y queso" },
      { name: "Flautas", price: "$15.75", description: "3 tortillas fritas rellenas de papa con frijoles, lechuga, crema y queso" },
      { name: "Carne Asada", price: "$23.10", description: "Corte de res a la parrilla con cebollitas y nopales asados" },
      { name: "Fajitas", price: "$22.05", description: "Tiras de carne o pollo con pimientos y cebolla salteados" },
    ],
  },
  {
    name: "Menú Infantil",
    description: "Para los pequeños de la familia",
    items: [
      { name: "Canadian Combito", price: "$5.25", description: "2 pancakes con mantequilla, syrup y 2 tiras de bacon" },
      { name: "Cheese Quesadilla", price: "$8.40", description: "Tortilla de harina con queso mozzarella y papas fritas" },
      { name: "Chicken Strips", price: "$8.40", description: "Tiras de pollo empanizadas con papas fritas" },
      { name: "Cheese Burger", price: "$8.40", description: "Hamburguesa con queso amarillo y papas fritas" },
    ],
  },
  {
    name: "Bebidas",
    description: "Refrescantes opciones para acompañar tu comida",
    items: [
      { name: "Agua Fresca", price: "$4.50", description: "Jamaica, horchata o tamarindo" },
      { name: "Refrescos Mexicanos", price: "$3.50", description: "Jarritos, Mexican Coke" },
      { name: "Cerveza", price: "$6.00", description: "Corona, Modelo, Pacifico" },
      { name: "Margarita", price: "$10.00", description: "Clásica, fresa o mango" },
      { name: "Michelada", price: "$9.00", description: "Preparada con nuestra receta secreta" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTacos})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nuestro Menú
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-card hero-text-shadow">
            Sabores Auténticos
          </h1>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-10">
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow flex justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    {item.price && (
                      <span className="font-display text-2xl text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {catIndex < menuCategories.length - 1 && (
                <div className="mt-16 flex justify-center">
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
