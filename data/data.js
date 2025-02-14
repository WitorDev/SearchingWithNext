// src/products.js

const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium quality wireless headphones with noise cancellation and long battery life.",
      price: 99.99,
      stock: 25,
      category: "Electronics",
      images: [
        "/images/headphones-1.jpg",
        "/images/headphones-2.jpg",
      ],
      ratings: {
        average: 4.5,
        count: 120,
      },
      brand: "SoundX",
      features: [
        "Bluetooth 5.0",
        "Noise Cancellation",
        "Up to 20 hours of battery life",
        "Comfortable over-ear design"
      ],
      dimensions: {
        weight: "0.5 lbs",
        height: "7.5 inches",
        width: "6.5 inches",
        depth: "3.0 inches"
      },
      releaseDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Smartphone 12 Pro",
      description: "Latest flagship smartphone with powerful processing capabilities and stunning camera.",
      price: 899.99,
      stock: 10,
      category: "Mobile",
      images: [
        "/images/smartphone-1.jpg",
        "/images/smartphone-2.jpg",
      ],
      ratings: {
        average: 4.8,
        count: 320,
      },
      brand: "TechCorp",
      features: [
        "6.5-inch OLED display",
        "Triple rear camera setup (12 MP + 12 MP + 8 MP)",
        "5G support",
        "128GB storage"
      ],
      dimensions: {
        weight: "0.4 lbs",
        height: "6.1 inches",
        width: "2.9 inches",
        depth: "0.3 inches"
      },
      releaseDate: "2023-09-30",
    },
    {
      id: 3,
      name: "Stainless Steel Blender",
      description: "High-powered blender for smoothies, soups, and more, with multiple blending speeds and settings.",
      price: 129.99,
      stock: 50,
      category: "Home Appliances",
      images: [
        "/images/blender-1.jpg",
        "/images/blender-2.jpg",
      ],
      ratings: {
        average: 4.2,
        count: 75,
      },
      brand: "BlendPro",
      features: [
        "1,200W motor",
        "Dishwasher-safe parts",
        "Multiple speed settings",
        "Pulse function"
      ],
      dimensions: {
        weight: "3.5 lbs",
        height: "15 inches",
        width: "8 inches",
        depth: "8 inches"
      },
      releaseDate: "2022-11-20",
    },
    {
      id: 4,
      name: "4K Ultra HD Smart TV",
      description: "50-inch 4K Ultra HD smart TV with built-in streaming apps and high dynamic range (HDR) support.",
      price: 499.99,
      stock: 15,
      category: "Electronics",
      images: [
        "/images/smart-tv-1.jpg",
        "/images/smart-tv-2.jpg",
      ],
      ratings: {
        average: 4.6,
        count: 250,
      },
      brand: "VisionTech",
      features: [
        "50-inch LED display",
        "4K resolution",
        "HDR support",
        "Built-in WiFi and streaming apps"
      ],
      dimensions: {
        weight: "15 lbs",
        height: "28.0 inches",
        width: "44.0 inches",
        depth: "3.0 inches"
      },
      releaseDate: "2022-05-05",
    },
    {
      id: 5,
      name: "Leather Laptop Bag",
      description: "Premium leather laptop bag with plenty of compartments for storage and padded laptop sleeve.",
      price: 89.99,
      stock: 40,
      category: "Accessories",
      images: [
        "/images/laptop-bag-1.jpg",
        "/images/laptop-bag-2.jpg",
      ],
      ratings: {
        average: 4.7,
        count: 180,
      },
      brand: "LeatherCraft",
      features: [
        "Genuine leather",
        "Fits laptops up to 15 inches",
        "Multiple organizational pockets",
        "Adjustable shoulder strap"
      ],
      dimensions: {
        weight: "2.0 lbs",
        height: "12 inches",
        width: "16 inches",
        depth: "4 inches"
      },
      releaseDate: "2021-12-10",
    }
  ];
  
  export default products;
  