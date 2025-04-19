
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  if (totalItems === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-center mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8 text-center">
            Looks like you haven't added anything to your cart yet.
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
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-md">
              {/* Cart Items Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-600">
                <div className="col-span-6 lg:col-span-6">Product</div>
                <div className="col-span-2 lg:col-span-2 text-center">Quantity</div>
                <div className="col-span-3 lg:col-span-3 text-right">Price</div>
                <div className="col-span-1 lg:col-span-1"></div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="grid grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-6 lg:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                        {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                      </div>
                    </div>

                    <div className="col-span-2 lg:col-span-2">
                      <div className="flex items-center justify-center border border-gray-200 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 text-gray-600"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 text-gray-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-3 lg:col-span-3 text-right">
                      <p className="text-sm font-medium text-gray-900">Rs {(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-xs text-gray-500">Rs {item.price.toFixed(2)} each</p>
                    </div>

                    <div className="col-span-1 lg:col-span-1 flex justify-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span className="font-medium">Rs {(totalPrice * 0.18).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">Rs {(totalPrice + (totalPrice * 0.18)).toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Including GST</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <Link
                  to="/checkout"
                  className="block w-full bg-trendify-teal text-white text-center py-3 rounded-md hover:bg-teal-600 transition-colors"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/shop"
                  className="block w-full bg-white border border-gray-300 text-gray-700 text-center py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
