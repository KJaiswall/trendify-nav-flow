
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Summer Essentials",
      description: "Beat the heat with our summer collection",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
      link: "/shop"
    },
    {
      id: 2,
      name: "Winter Collection",
      description: "Stay warm and stylish this winter",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
      link: "/shop"
    },
    {
      id: 3,
      name: "Formal Attire",
      description: "Professional outfits for work and formal events",
      image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=800&auto=format&fit=crop",
      link: "/shop"
    },
    {
      id: 4,
      name: "Activewear",
      description: "Performance clothing for your active lifestyle",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      link: "/shop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Our Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.link}
              className="block group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
                  <p className="text-center">{collection.description}</p>
                  <button className="mt-4 bg-white text-black px-6 py-2 rounded-md hover:bg-trendify-teal hover:text-white transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
