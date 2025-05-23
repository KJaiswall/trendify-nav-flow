
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import RecommendationSection from "../components/RecommendationSection";

const Index = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [personalizedRecommendations, setPersonalizedRecommendations] = useState([]);

  // Mock featured products data (would be fetched from an API)
  const mockFeaturedProducts = [
    {
      id: 1,
      name: "Classic Fit T-Shirt",
      category: "men",
      price: 29.99,
      originalPrice: 39.99,
      brand: "Nike",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      category: "women",
      price: 49.99,
      originalPrice: 69.99,
      brand: "Zara",
      color: "Pink",
      sizes: ["XS", "S", "M", "L"],
      image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=500&auto=format&fit=crop",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Running Sneakers",
      category: "footwear",
      price: 89.99,
      originalPrice: 119.99,
      brand: "Adidas",
      color: "Black",
      sizes: ["7", "8", "9", "10", "11"],
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Silver Necklace",
      category: "accessories",
      price: 59.99,
      originalPrice: 59.99,
      brand: "Pandora",
      color: "Silver",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88552?q=80&w=500&auto=format&fit=crop",
      rating: 4.3,
    },
  ];

  // Mock new arrivals (would be fetched from an API)
  const mockNewArrivals = [
    {
      id: 9,
      name: "Lightweight Windbreaker",
      category: "men",
      price: 69.99,
      originalPrice: 89.99,
      brand: "Columbia",
      color: "Gray",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop",
      rating: 4.3,
    },
    {
      id: 10,
      name: "Casual Slip-On Shoes",
      category: "footwear",
      price: 49.99,
      originalPrice: 49.99,
      brand: "Vans",
      color: "White",
      sizes: ["7", "8", "9", "10", "11"],
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500&auto=format&fit=crop",
      rating: 4.0,
    },
    {
      id: 11,
      name: "Premium Jogger Pants",
      category: "men",
      price: 45.99,
      originalPrice: 59.99,
      brand: "Under Armour",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1616257460948-66176612b9d9?q=80&w=500&auto=format&fit=crop",
      rating: 4.6,
    },
    {
      id: 12,
      name: "Smart Watch",
      category: "accessories",
      price: 199.99,
      originalPrice: 249.99,
      brand: "Garmin",
      color: "Black",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
      rating: 4.9,
    },
  ];

  // Mock personalized recommendations (would be generated by AI)
  const mockPersonalizedRecommendations = [
    {
      id: 13,
      name: "Leather Crossbody Bag",
      category: "accessories",
      price: 79.99,
      originalPrice: 99.99,
      brand: "Coach",
      color: "Tan",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
    },
    {
      id: 14,
      name: "Wireless Earbuds",
      category: "accessories",
      price: 129.99,
      originalPrice: 159.99,
      brand: "JBL",
      color: "Black",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=500&auto=format&fit=crop",
      rating: 4.5,
    },
    {
      id: 15,
      name: "Casual Denim Jacket",
      category: "women",
      price: 69.99,
      originalPrice: 89.99,
      brand: "Levi's",
      color: "Blue",
      sizes: ["XS", "S", "M", "L"],
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      rating: 4.4,
    },
    {
      id: 16,
      name: "Aviator Sunglasses",
      category: "accessories",
      price: 119.99,
      originalPrice: 119.99,
      brand: "Ray-Ban",
      color: "Gold",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=500&auto=format&fit=crop",
      rating: 4.8,
    },
  ];

  // Simulate fetching data
  useEffect(() => {
    // In a real application, these would be API calls
    setFeaturedProducts(mockFeaturedProducts);
    setNewArrivals(mockNewArrivals);
    setPersonalizedRecommendations(mockPersonalizedRecommendations);
  }, []);

  return (
    <div className="min-h-screen bg-trendify-lightGray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trendify-teal to-teal-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Summer Collection 2025
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Discover the latest trends and elevate your style with our exclusive summer collection.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate("/shop")}
                className="bg-white text-trendify-teal px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </button>
              <button 
                onClick={() => navigate("/collections")}
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                View Collections
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop" 
              alt="Summer Collection" 
              className="rounded-lg shadow-lg max-h-96 object-cover w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Men", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=387&auto=format&fit=crop", path: "/shop/men" },
              { name: "Women", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=387&auto=format&fit=crop", path: "/shop/women" },
              { name: "Kids", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=387&auto=format&fit=crop", path: "/shop/kids" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=387&auto=format&fit=crop", path: "/shop/accessories" },
            ].map((category) => (
              <div
                key={category.name}
                onClick={() => navigate(category.path)}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-48 md:h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <button 
              onClick={() => navigate("/shop")}
              className="flex items-center gap-1 text-trendify-teal hover:underline"
            >
              View all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <button 
              onClick={() => navigate("/shop")}
              className="flex items-center gap-1 text-trendify-teal hover:underline"
            >
              View all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Recommendation Section */}
      <RecommendationSection 
        title="Recommended For You" 
        description="Based on your browsing history and preferences"
        products={personalizedRecommendations}
      />
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest updates on new products and upcoming sales
              </p>
              
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-trendify-teal"
                  required
                />
                <button
                  type="submit"
                  className="bg-trendify-teal text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
