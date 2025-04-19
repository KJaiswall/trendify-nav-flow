
import React from "react";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center">
          <Heart className="h-16 w-16 text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-center mb-4">Your wishlist is empty</h1>
          <p className="text-gray-500 mb-8 text-center">
            Save items you love to your wishlist and review them anytime.
          </p>
          <Link
            to="/shop"
            className="bg-trendify-teal text-white py-3 px-6 rounded-md hover:bg-teal-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">My Wishlist ({items.length} {items.length === 1 ? 'item' : 'items'})</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </div>
              
              <div className="mt-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-trendify-teal font-medium mt-2">Rs {item.price.toFixed(2)}</p>
              </div>
              
              <Button
                onClick={() => {
                  addToCart({ ...item, quantity: 1 });
                  removeFromWishlist(item.id);
                }}
                className="w-full mt-4 bg-trendify-teal hover:bg-teal-600"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
