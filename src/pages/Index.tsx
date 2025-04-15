
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: "men",
      name: "Men",
      image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=700&auto=format&fit=crop",
      link: "/men"
    },
    {
      id: "women",
      name: "Women",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=700&auto=format&fit=crop",
      link: "/shop/women"
    },
    {
      id: "kids",
      name: "Kids",
      image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=700&auto=format&fit=crop",
      link: "/shop/kids"
    },
    {
      id: "accessories",
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=700&auto=format&fit=crop",
      link: "/shop/accessories"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Classic Fit T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Leather Bomber Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Running Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=500&auto=format&fit=crop",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[600px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2000&auto=format&fit=crop"
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Summer Collection 2025</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">Discover the latest trends and styles for the upcoming season</p>
            <div className="space-x-4">
              <Link 
                to="/shop" 
                className="bg-white text-black px-8 py-3 rounded-md hover:bg-trendify-teal hover:text-white transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                to="/collections" 
                className="bg-transparent border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={category.link} 
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop" className="text-trendify-teal hover:text-teal-700 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`} 
                className="group"
              >
                <div className="mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-lg group-hover:text-trendify-teal transition-colors">{product.name}</h3>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotions Section */}
      <section className="py-16 bg-trendify-teal bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
                alt="Women's Collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-8">
                <p className="text-white text-lg mb-2">New Arrivals</p>
                <h3 className="text-white text-3xl font-bold mb-6">Women's Collection</h3>
                <Link 
                  to="/shop/women" 
                  className="bg-white text-black px-6 py-2 rounded-md hover:bg-trendify-teal hover:text-white transition-colors inline-block w-fit"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" 
                alt="Men's Collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-8">
                <p className="text-white text-lg mb-2">Trending Now</p>
                <h3 className="text-white text-3xl font-bold mb-6">Men's Collection</h3>
                <Link 
                  to="/men" 
                  className="bg-white text-black px-6 py-2 rounded-md hover:bg-trendify-teal hover:text-white transition-colors inline-block w-fit"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-md text-black focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-trendify-teal px-6 py-3 rounded-r-md hover:bg-teal-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
