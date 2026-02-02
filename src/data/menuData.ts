// Menu item images
import tacosPastor from "@/assets/menu/tacos-pastor.jpg";
import tacosCarnitas from "@/assets/menu/tacos-carnitas.jpg";
import quesabirria from "@/assets/menu/quesabirria.jpg";
import burrito from "@/assets/menu/burrito.jpg";
import burritoBowl from "@/assets/menu/burrito-bowl.jpg";
import quesadilla from "@/assets/menu/quesadilla.jpg";
import nachos from "@/assets/menu/nachos.jpg";
import elote from "@/assets/menu/elote.jpg";
import guacamole from "@/assets/menu/guacamole.jpg";
import horchata from "@/assets/menu/horchata.jpg";
import jamaica from "@/assets/menu/jamaica.jpg";
import margarita from "@/assets/menu/margarita.jpg";
import torta from "@/assets/menu/torta.jpg";
import tresLeches from "@/assets/menu/tres-leches.jpg";
import churros from "@/assets/menu/churros.jpg";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

// Food Truck Menu
export const foodTruckMenu: MenuCategory[] = [
  {
    id: "tacos",
    name: "🌮 Tacos",
    description: "Authentic Mexican tacos with your choice of protein",
    items: [
      { name: "3 Tacos", price: "$17.85", description: "Soft tortillas with cilantro and onion. Choose your protein: Barbacoa, Carnitas, Cochinita, Tinga, Steak, or Vegetarian", image: tacosPastor },
    ],
  },
  {
    id: "specialty",
    name: "🫔 Specialty",
    description: "Our signature dish",
    items: [
      { name: "Quesa-Birria", price: "$19.95", description: "3 fried tortillas with mozzarella cheese, birria, cilantro and onion. Consomé included", image: quesabirria },
    ],
  },
  {
    id: "burritos",
    name: "🌯 Burritos",
    description: "Large flour tortillas packed with flavor",
    items: [
      { name: "Burrito", price: "$16.80", description: "Large flour tortilla with rice, beans, protein and toppings", image: burrito },
      { name: "Burrito Bowl", price: "$16.80", description: "Everything from the burrito but in a bowl, no tortilla", image: burritoBowl },
    ],
  },
  {
    id: "tortas",
    name: "🥪 Tortas",
    description: "Mexican sandwiches",
    items: [
      { name: "Torta", price: "$18.90", description: "Homemade bread with mayo, beans, protein, lettuce, tomato, avocado and cream", image: torta },
    ],
  },
  {
    id: "quesadillas",
    name: "🧀 Quesadillas",
    description: "Crispy tortillas with melted cheese",
    items: [
      { name: "Cheese Quesadilla", price: "$14.00", description: "Large flour tortilla with melted mozzarella cheese", image: quesadilla },
    ],
  },
  {
    id: "nachos",
    name: "🧀 Nachos",
    description: "Loaded crispy chips",
    items: [
      { name: "Nachos", price: "$18.90", description: "Chips with beans, protein, melted cheese, pico de gallo and cream", image: nachos },
    ],
  },
  {
    id: "antojitos",
    name: "🌽 Antojitos",
    description: "Mexican street snacks",
    items: [
      { name: "Esquites", price: "$8.00", description: "Mexican corn in a cup with mayo, cotija cheese, lime and chili", image: elote },
      { name: "Dori-Esquites", price: "$10.00", description: "Esquites served in a Doritos bag", image: elote },
    ],
  },
  {
    id: "drinks-truck",
    name: "🥤 Drinks",
    description: "Refreshing Mexican beverages",
    items: [
      { name: "Jamaica", price: "$4.50", description: "Hibiscus flower tea, sweet and refreshing", image: jamaica },
      { name: "Horchata", price: "$4.50", description: "Traditional rice milk with cinnamon", image: horchata },
      { name: "Jarritos", price: "$3.50", description: "Mexican soda in various flavors", image: horchata },
    ],
  },
  {
    id: "desserts-truck",
    name: "🍰 Desserts",
    description: "Sweet treats to end your meal",
    items: [
      { name: "Tres Leches Cake", price: "$8.00", description: "Moist sponge cake soaked in three types of milk", image: tresLeches },
      { name: "Churros", price: "$6.00", description: "Fried dough pastry with cinnamon sugar", image: churros },
    ],
  },
];

// Restaurant Menu
export const restaurantMenu: MenuCategory[] = [
  {
    id: "breakfast",
    name: "🍳 Breakfast",
    description: "All breakfasts include a portion of seasonal fruit",
    items: [
      { name: "Breakfast Burrito", price: "$13.65", description: "Three scrambled eggs, bacon, pico de gallo and refried beans in a flour tortilla", image: burrito },
      { name: "Omelette", price: "$15.75", description: "3-egg omelette filled with peppers, onion and ham. Served with beans and potatoes", image: quesadilla },
      { name: "Chilaquiles", price: "$15.75", description: "Homemade chips bathed in green or red salsa, cream, onion, cheese and protein of choice", image: nachos },
      { name: "Mexican Breakfast", price: "$13.65", description: "Three eggs any style, refried beans and homemade tortillas", image: tacosCarnitas },
    ],
  },
  {
    id: "kids",
    name: "👶 Kids Menu",
    description: "For the little ones in the family",
    items: [
      { name: "Canadian Combito", price: "$5.25", description: "2 pancakes with butter, syrup and 2 bacon strips", image: tresLeches },
      { name: "Cheese Quesadilla", price: "$8.40", description: "Flour tortilla with mozzarella cheese and french fries", image: quesadilla },
      { name: "Cheese Burger", price: "$8.40", description: "Burger with american cheese and french fries", image: torta },
      { name: "Chicken Strips", price: "$8.40", description: "Breaded chicken strips with french fries", image: quesadilla },
    ],
  },
  {
    id: "from-truck",
    name: "🚚 From the Truck to Your Table",
    description: "Our food truck favorites, now at the restaurant",
    items: [
      { name: "Tacos (3)", price: "$17.85", description: "3 soft tortillas with your favorite filling, cilantro and onion", image: tacosPastor },
      { name: "Burrito", price: "$16.80", description: "Large flour tortilla with rice, beans, protein and toppings", image: burrito },
      { name: "Burrito Bowl", price: "$16.80", description: "Everything from the burrito but in a bowl, no tortilla", image: burritoBowl },
      { name: "Torta", price: "$18.90", description: "Homemade bread with mayo, beans, protein, lettuce, tomato, avocado and cream", image: torta },
      { name: "Nachos", price: "$18.90", description: "Chips with beans, protein, melted cheese, pico de gallo and cream", image: nachos },
      { name: "Quesadilla", price: "$16.80", description: "Large tortilla with melted cheese and your favorite protein", image: quesadilla },
      { name: "Quesabirria", price: "$19.95", description: "3 fried tortillas with mozzarella cheese, birria, cilantro and onion. Consomé included", image: quesabirria },
    ],
  },
  {
    id: "fillings",
    name: "🥩 Fillings",
    description: "Choose your favorite protein for any dish",
    items: [
      { name: "Carnitas", price: "", description: "Pulled pork, slow-cooked to perfection", image: tacosCarnitas },
      { name: "Cochinita", price: "", description: "Pork in achiote adobo, Yucatan style", image: tacosPastor },
      { name: "Birria", price: "", description: "Tender beef in guajillo sauce", image: quesabirria },
      { name: "Steak", price: "", description: "Seasoned grilled beef", image: tacosCarnitas },
      { name: "Tinga", price: "", description: "Shredded chicken in tomato and dry peppers sauce", image: tacosPastor },
      { name: "Vegetarian", price: "", description: "Stew of zucchini, corn, tomato and onion", image: elote },
    ],
  },
  {
    id: "food-menu",
    name: "🍽️ Food Menu",
    description: "Traditional Mexican plates served with rice, beans and tortillas",
    items: [
      { name: "Enchiladas", price: "$15.75", description: "3 chicken-filled tortillas bathed in green or red salsa, lettuce, cream and cheese", image: quesadilla },
      { name: "Flautas", price: "$15.75", description: "3 fried tortillas filled with potato, beans, lettuce, cream and cheese", image: nachos },
      { name: "Fajitas", price: "$22.05", description: "Strips of beef or chicken with sautéed peppers and onions", image: burritoBowl },
    ],
  },
  {
    id: "seafood",
    name: "🦐 Seafood Menu",
    description: "Fresh seafood prepared with authentic Mexican flavors",
    items: [
      { name: "Ceviche", price: "$18.00", description: "Fresh fish marinated in lime juice with tomato, onion, cilantro and avocado", image: guacamole },
      { name: "Aguachile", price: "$19.00", description: "Shrimp in spicy lime juice with cucumber, onion and serrano peppers", image: guacamole },
    ],
  },
  {
    id: "soups",
    name: "🍲 Soups",
    description: "Hearty traditional Mexican soups",
    items: [
      { name: "Birria", price: "$21.00", description: "Shredded beef in dried chili and aromatic spice broth", image: quesabirria },
      { name: "Seafood Soup", price: "$24.00", description: "Mixed seafood in a rich tomato broth with vegetables", image: guacamole },
      { name: "Beef Soup", price: "$18.00", description: "Traditional beef soup with vegetables and hominy", image: tacosCarnitas },
      { name: "Chicken Soup", price: "$16.00", description: "Classic chicken soup with vegetables and rice", image: tacosPastor },
    ],
  },
  {
    id: "hamburger",
    name: "🍔 Hamburger",
    description: "American classic with a Mexican twist",
    items: [
      { name: "Hamburger", price: "$14.00", description: "Beef patty with lettuce, tomato, onion, pickles and special sauce. Served with fries", image: torta },
    ],
  },
  {
    id: "molcajetes",
    name: "🥘 Molcajetes",
    description: "Served in a traditional volcanic stone mortar",
    items: [
      { name: "Traditional Molcajete", price: "$28.00", description: "Choose your protein: Steak, Pork in adobo, or Chicken. Served with grilled cactus, onions, and cheese", image: guacamole },
      { name: "Molcajete Mixto", price: "$35.00", description: "Combination of Steak, Chicken, and Shrimp with grilled vegetables", image: guacamole },
    ],
  },
  {
    id: "desserts",
    name: "🍰 Desserts",
    description: "Sweet endings to your meal",
    items: [
      { name: "Tres Leches Cake", price: "$8.00", description: "Moist sponge cake soaked in three types of milk", image: tresLeches },
      { name: "Flan", price: "$7.00", description: "Traditional Mexican caramel custard", image: tresLeches },
      { name: "Churros", price: "$6.00", description: "Fried dough pastry with cinnamon sugar and chocolate sauce", image: churros },
      { name: "Esquites", price: "$8.00", description: "Mexican corn in a cup with mayo, cotija cheese, lime and chili", image: elote },
      { name: "Dori-Esquites", price: "$10.00", description: "Esquites served in a Doritos bag", image: elote },
    ],
  },
  {
    id: "drinks",
    name: "🥤 Drinks",
    description: "Refreshing beverages",
    items: [
      { name: "Coffee", price: "$3.00", description: "Fresh brewed coffee", image: horchata },
      { name: "Tea", price: "$3.00", description: "Hot or iced tea", image: horchata },
      { name: "Soft Drink", price: "$3.00", description: "Coca-Cola, Sprite, or Fanta", image: horchata },
      { name: "Jamaica", price: "$4.50", description: "Hibiscus flower tea, sweet and refreshing", image: jamaica },
      { name: "Horchata", price: "$4.50", description: "Traditional rice milk with cinnamon", image: horchata },
    ],
  },
  {
    id: "beer",
    name: "🍺 Beer",
    description: "Mexican and domestic beers",
    items: [
      { name: "Corona", price: "$6.00", description: "Light Mexican lager", image: margarita },
      { name: "Modelo Especial", price: "$6.00", description: "Rich, full-flavored pilsner", image: margarita },
      { name: "Budweiser", price: "$5.00", description: "Classic American lager", image: margarita },
    ],
  },
  {
    id: "margaritas",
    name: "🍹 Margaritas",
    description: "Handcrafted cocktails",
    items: [
      { name: "Strawberry Margarita", price: "$10.00", description: "Frozen or on the rocks with fresh strawberries", image: margarita },
      { name: "Lime Margarita", price: "$10.00", description: "Classic lime margarita, frozen or on the rocks", image: margarita },
    ],
  },
];

// All dishes for reservation selection
export const allDishes = [
  "Tacos (3)",
  "Burrito",
  "Burrito Bowl",
  "Quesadilla",
  "Quesabirria",
  "Nachos",
  "Torta",
  "Enchiladas",
  "Flautas",
  "Fajitas",
  "Ceviche",
  "Aguachile",
  "Birria Soup",
  "Molcajete Traditional",
  "Molcajete Mixto",
  "Breakfast Burrito",
  "Chilaquiles",
  "Omelette",
  "Tres Leches Cake",
  "Churros",
  "Flan",
];
