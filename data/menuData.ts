import { CardType } from "@/types/menuTypes";

const menuContentData = [
    {
        title: "sushi",
        items: [
            { name: "nigiri", description: "Hand-pressed rice topped with seafood", solo_price: "$8", set_price: "$22", image: "/icons/sake3.png", rating: "4.7" },
            { name: "maguro nigiri", description: "Tuna served over seasoned rice", solo_price: "$12", set_price: "$28", image: "/icons/maki-sushi3.png", rating: "4.8" },
            { name: "ebi nigiri", description: "Shrimp served over seasoned rice", solo_price: "$10", set_price: "$24", image: "/icons/shrimp-sushi2.png", rating: "4.6" },
            { name: "tamago", description: "Sweet egg omelet over rice", solo_price: "$7", set_price: "$20", image: "/icons/egg-sushi2.png", rating: "4.4" }
        ]
    },
    {
        title: "ramen",
        items: [
            { name: "shoyu", description: "Soy sauce broth with savory depth", solo_price: "$14", set_price: "$22", image: "/icons/ramen3.png", rating: "4.7" },
            { name: "shio", description: "Clear salt-based broth", solo_price: "$14", set_price: "$22", image: "/icons/shio2.png", rating: "4.5" },
            { name: "miso", description: "Soybean paste broth with rich flavor", solo_price: "$15", set_price: "$24", image: "/icons/miso2.png", rating: "4.8" },
            { name: "tonkotsu", description: "Pork bone broth with creamy texture", solo_price: "$17", set_price: "$26", image: "/icons/tonkotsu-ramen1.png", rating: "4.9" }
        ]
    },
    {
        title: "donburi",
        items: [
            { name: "katsudon", description: "Pork cutlet with egg over rice", solo_price: "$16", set_price: "$26", image: "/icons/katsudon2.png", rating: "4.8" },
            { name: "katsu curry", description: "Breaded cutlet with Japanese curry", solo_price: "$18", set_price: "$28", image: "/icons/katsu-curry3.png", rating: "4.9" },
            { name: "gyudon", description: "Beef and onions simmered over rice", solo_price: "$17", set_price: "$27", image: "/icons/gyudon4.png", rating: "4.7" },
            { name: "unadon", description: "Grilled eel glazed with sauce over rice", solo_price: "$26", set_price: "$42", image: "/icons/unadon2.png", rating: "4.6" },
            { name: "tekkadon", description: "Raw tuna slices over rice", solo_price: "$22", set_price: "$36", image: "/icons/tekkadon2.png", rating: "4.7" }
        ]
    },
    {
        title: "yoshoku",
        items: [
            { name: "tonkatsu", description: "Breaded and fried pork cutlet", solo_price: "$16", set_price: "$26", image: "/icons/tonkatsu-yoshoku1.png", rating: "4.8" },
            { name: "chicken katsu", description: "Breaded and fried chicken cutlet", solo_price: "$15", set_price: "$25", image: "/icons/chicken-katsu2.png", rating: "4.7" },
            { name: "gyukatsu", description: "Breaded and fried beef cutlet", solo_price: "$20", set_price: "$32", image: "/icons/gyukatsu2.png", rating: "4.6" }
        ]
    },
    {
        title: "sashimi",
        items: [
            { name: "maguro", description: "Slices of raw tuna", solo_price: "$18", set_price: "$30", image: "/icons/maguro-sashimi1.png", rating: "4.8" },
            { name: "sake", description: "Slices of raw salmon", solo_price: "$17", set_price: "$28", image: "/icons/sake-sashimi1.png", rating: "4.9" },
            { name: "tai", description: "Sea bream slices", solo_price: "$19", set_price: "$32", image: "/icons/tai-sashimi1.png", rating: "4.6" },
            { name: "hamachi", description: "Yellowtail slices", solo_price: "$20", set_price: "$34", image: "/icons/hamachi-sashimi1.png", rating: "4.8" },
            { name: "hotate", description: "Raw scallop slices", solo_price: "$22", set_price: "$36", image: "/icons/hotate-sashimi1.png", rating: "4.7" },
            { name: "saba", description: "Cured mackerel slices", solo_price: "$16", set_price: "$26", image: "/icons/saba-sashimi1.png", rating: "4.4" }
        ]
    },
    {
        title: "appetizer",
        items: [
            { name: "takoyaki", description: "Octopus-filled batter balls", solo_price: "$8", set_price: "$14", image: "/icons/takoyaki1.png", rating: "4.9" },
            { name: "tempura", description: "Lightly battered fried seafood or vegetables", solo_price: "$10", set_price: "$18", image: "/icons/tempura3.png", rating: "4.8" },
            { name: "gyoza", description: "Pan-fried meat dumplings", solo_price: "$9", set_price: "$16", image: "/icons/gyoza2.png", rating: "4.7" },
            { name: "yakitori", description: "Grilled chicken skewers", solo_price: "$11", set_price: "$18", image: "/icons/yakitori1.png", rating: "4.6" },
            { name: "hiyayakko", description: "Chilled tofu with toppings", solo_price: "$7", set_price: "$13", image: "/icons/hiyayakko1.png", rating: "4.3" }
        ]
    },
    {
        title: "drinks",
        items: [
            { name: "matcha", description: "Powdered green tea", solo_price: "$5", image: "/icons/matcha3.png", rating: "4.7" },
            { name: "genmaicha", description: "Green tea with roasted rice", solo_price: "$4", image: "/icons/genmaicha.png", rating: "4.5" },
            { name: "hojicha", description: "Roasted green tea", solo_price: "$4", image: "/icons/hojicha.png", rating: "4.6" },
            { name: "mugicha", description: "Roasted barley tea", solo_price: "$3", image: "/icons/mugicha.png", rating: "4.3" },
            { name: "sake", description: "Fermented rice wine", solo_price: "$9", image: "/icons/sake2.png", rating: "4.8" }
        ]
    },
    {
        title: "global coffee",
        items: [
            { name: "cappuccino", description: "Espresso with steamed milk foam", solo_price: "$10", image: "/icons/capuccino.png", rating: "4.7" },
            { name: "espresso", description: "Concentrated coffee shot", solo_price: "$10", image: "/icons/espresso.png", rating: "4.5" },
            { name: "black coffee", description: "Brewed coffee without additives", solo_price: "$10", image: "/icons/black_coffee.png", rating: "4.4" },
            { name: "americano", description: "Espresso with added hot water", solo_price: "$10", image: "/icons/americano.png", rating: "4.5" },
            { name: "mocha", description: "Coffee with chocolate and milk", solo_price: "$10", image: "/icons/mocha.png", rating: "4.8" },
            { name: "spanish latte", description: "Coffee with condensed milk", solo_price: "$10", image: "/icons/spanish_latte.png", rating: "4.9" }
        ]
    },
    {
        title: "iced coffee",
        items: [
            { name: "iced flat white", description: "Espresso with cold milk", solo_price: "$10", image: "/icons/iced_flat_white.png", rating: "4.6" },
            { name: "iced americano", description: "Espresso with cold water and ice", solo_price: "$10", image: "/icons/iced_caffee_americano.png", rating: "4.5" },
            { name: "iced caramel macchiato", description: "Milk, espresso, and caramel syrup", solo_price: "$10", image: "/icons/iced_caramel_macchiato.png", rating: "4.9" }
        ]
    },
    {
        title: "dessert",
        items: [
            { name: "mochi ice cream", description: "Rice cake filled with ice cream", solo_price: "$7", set_price: "$12", image: "/icons/mochie.png", rating: "4.8" },
            { name: "taiyaki", description: "Fish-shaped pastry with filling", solo_price: "$6", set_price: "$11", image: "/icons/taiyaki1.png", rating: "4.7" },
            { name: "dorayaki", description: "Pancakes filled with sweet paste", solo_price: "$7", set_price: "$12", image: "/icons/dorayaki1.png", rating: "4.6" },
            { name: "kakigori", description: "Shaved ice with flavored syrup", solo_price: "$8", set_price: "$13", image: "/icons/kakigori1.png", rating: "4.5" },
            { name: "anmitsu", description: "Jelly dessert with fruits and syrup", solo_price: "$9", set_price: "$14", image: "/icons/anmitsu1.png", rating: "4.3" }
        ]
    }
];

// Build a lookup map (title → items)
const contentMap = Object.fromEntries(
  menuContentData.map(section => [section.title, section.items])
);


const menuCardsData: CardType[] = [
  {
    id: 1,
    title: "Sushi",
    description: "Fresh selection",
    thumbnail: "/icons/maguro2.png",
    content: contentMap["sushi"],
  },
  {
    id: 2,
    title: "Ramen",
    description: "Rich broth",
    thumbnail: "/icons/ramen3.png",
    content: contentMap["ramen"],
  },
  {
    id: 3,
    title: "Donburi",
    description: "Rice bowls",
    thumbnail: "/icons/chicken-katsu2.png",
    content: contentMap["donburi"],
  },
  {
    id: 4,
    title: "Yoshoku",
    description: "Western fusion",
    thumbnail: "/icons/tonkatsu-yoshoku1.png",
    content: contentMap["yoshoku"],
  },
  {
    id: 5,
    title: "Sashimi",
    description: "Pure cuts",
    thumbnail: "/icons/sushi-4.png",
    content: contentMap["sashimi"],
  },
  {
    id: 6,
    title: "Appetizer",
    description: "Starter bites",
    thumbnail: "/icons/tempura3.png",
    content: contentMap["appetizer"],
  },
  {
    id: 7,
    title: "Drinks",
    description: "Crafted beverages",
    thumbnail: "/icons/matcha3.png",
    content: [
      ...(contentMap["drinks"] || []),
      ...(contentMap["global coffee"] || []),
      ...(contentMap["iced coffee"] || []),
    ],
  },
  {
    id: 8,
    title: "Dessert",
    description: "Sweet finish",
    thumbnail: "/icons/dorayaki1.png",
    content: contentMap["dessert"],
  },
];


export default menuCardsData;   