const Product = require("../model/Product");

const demoProducts = [
    // Laptops (5)
    { name: "MacBook Pro 16", price: 249900, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800", description: "M3 Max chip, Liquid Retina XDR display." },
    { name: "Dell XPS 15", price: 185000, image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=800", description: "InfinityEdge OLED display, premium build." },
    { name: "HP Spectre x360", price: 145000, image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=800", description: "Convertible laptop with stunning design." },
    { name: "Lenovo ThinkPad X1", price: 165000, image: "https://images.unsplash.com/photo-1629853920786-2a6230f892b1?w=800", description: "Legendary keyboard for professionals." },
    { name: "Asus ROG Zephyrus", price: 210000, image: "https://images.unsplash.com/photo-1636592298687-353d2bb0c5d7?w=800", description: "Ultimate gaming performance." },

    // Phones (5)
    { name: "iPhone 15 Pro Max", price: 159900, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800", description: "Titanium design, A17 Pro chip." },
    { name: "Samsung Galaxy S24 Ultra", price: 139999, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800", description: "AI-powered, S Pen included." },
    { name: "Google Pixel 8 Pro", price: 106999, image: "https://images.unsplash.com/photo-1696446702334-927944634289?w=800", description: "Best-in-class camera and AI." },
    { name: "OnePlus 12", price: 69999, image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800", description: "Smooth performance, fast charging." },
    { name: "Nothing Phone (2)", price: 44999, image: "https://images.unsplash.com/photo-1690412399873-196191ec466c?w=800", description: "Unique Glyph interface design." },

    // Audio (5)
    { name: "Sony WH-1000XM5", price: 26990, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800", description: "Industry-leading noise cancellation." },
    { name: "AirPods Pro 2", price: 24900, image: "https://images.unsplash.com/photo-1628210889224-53b2e308bb46?w=800", description: "Immersive sound, magic connectivity." },
    { name: "Bose QuietComfort Ultra", price: 29900, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800", description: "Legendary silence, premium comfort." },
    { name: "Sennheiser Momentum 4", price: 22990, image: "https://images.unsplash.com/photo-1686708685108-999330924971?w=800", description: "Audiophile-grade sound quality." },
    { name: "JBL Flip 6", price: 11999, image: "https://images.unsplash.com/photo-1629210686508-6e36d47f9e57?w=800", description: "Bold sound for every adventure." },

    // Peripherals (5)
    { name: "Keychron K2 Pro", price: 8999, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800", description: "Wireless mechanical keyboard." },
    { name: "Logitech MX Master 3S", price: 9995, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800", description: "Precision mouse for creatives." },
    { name: "Razer DeathAdder V3", price: 11999, image: "https://images.unsplash.com/photo-1615663245857-acda5b2b1518?w=800", description: "Esports-grade gaming mouse." },
    { name: "LG 27'' 4K Monitor", price: 32000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800", description: "UHD 4K IPS Display with HDR10." },
    { name: "Samsung Odyssey G9", price: 125000, image: "https://images.unsplash.com/photo-1551609189-254ab8184c20?w=800", description: "49-inch curved gaming monitor." },

    // Wearables (5)
    { name: "Apple Watch Series 9", price: 41900, image: "https://images.unsplash.com/photo-1551817958-c5b51e77f0d0?w=800", description: "Smarter. Brighter. Mightier." },
    { name: "Samsung Galaxy Watch 6", price: 29999, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800", description: "Track sleep, health, and wellness." },
    { name: "Garmin Fenix 7", price: 79990, image: "https://images.unsplash.com/photo-1523475496153-3d6085ef292d?w=800", description: "Rugged multi-sport GPS watch." },
    { name: "Fitbit Charge 6", price: 14999, image: "https://images.unsplash.com/photo-1576243345690-8e4b445f8680?w=800", description: "Advanced fitness tracker." },
    { name: "Oura Ring Gen3", price: 35000, image: "https://images.unsplash.com/photo-1618485297121-6a2d121dd350?w=800", description: "Smart ring for sleep tracking." },

    // Cameras (5)
    { name: "Sony Alpha a7 IV", price: 224990, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800", description: "Full-frame hybrid camera." },
    { name: "Fujifilm X-T5", price: 169999, image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800", description: "Classic design, modern tech." },
    { name: "GoPro HERO12 Black", price: 39990, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800", description: "Action camera with HDR video." },
    { name: "DJI Mini 4 Pro", price: 95990, image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800", description: "Compact drone with 4K camera." },
    { name: "Insta360 X3", price: 45990, image: "https://images.unsplash.com/photo-1626244675762-b9e782e4e13d?w=800", description: "360-degree action camera." }
];

const seedIfEmpty = async () => {
    try {
        const count = await Product.countDocuments();
        if (count < 5) {
            console.log("Database has few/no products. Seeding demo products...");
            await Product.insertMany(demoProducts);
            console.log("Demo products added successfully.");
        } else {
            console.log(`Database has ${count} products. Skipping seed.`);
        }
    } catch (error) {
        console.error("Auto-seed error:", error);
    }
};

module.exports = seedIfEmpty;
