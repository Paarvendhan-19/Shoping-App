const Product = require("../model/Product");

const demoProducts = [
    {
        name: "MacBook Pro 16",
        description: "The most powerful MacBook Pro ever is here. With the blazing-fast M3 Max chip, incredible battery life, and a stunning Liquid Retina XDR display.",
        price: 249900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "IPhone 15 Pro Max",
        description: "Titanium design. A17 Pro chip. 48MP Main camera. The ultimate iPhone.",
        price: 159900,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise cancellation, exceptional sound quality, and crystal-clear calls.",
        price: 26990,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Keychron K2 Pro",
        description: "Wireless mechanical keyboard with QMK/VIA support, hot-swappable switches, and RGB backlight.",
        price: 8999,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Logitech MX Master 3S",
        description: "An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance.",
        price: 9995,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Samsung Galaxy Watch 6",
        description: "Know your sleep with Sleep Coaching. Monitor your heart health with ECG and BP.",
        price: 29999,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "JBL Flip 6",
        description: "Bold sound for every adventure. Waterproof and dustproof 2-way speaker system.",
        price: 11999,
        image: "https://images.unsplash.com/photo-1629210686508-6e36d47f9e57?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "LG 27'' 4K Monitor",
        description: "UHD 4K IPS Display with HDR10. Best for reliable color representation.",
        price: 32000,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000"
    }
];

const seedIfEmpty = async () => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            console.log("Database empty. Seeding demo products...");
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
