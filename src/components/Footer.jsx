
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-trendify-charcoal text-white mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and About */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Trendify</h2>
            <p className="text-gray-300 mb-4">
              Your destination for trendy fashion at affordable prices. Stay stylish with Trendify.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-trendify-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-trendify-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-trendify-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" aria-label="Youtube" className="hover:text-trendify-teal transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-trendify-teal">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/men" className="text-gray-300 hover:text-white transition-colors">Men</Link>
              </li>
              <li>
                <Link to="/shop/women" className="text-gray-300 hover:text-white transition-colors">Women</Link>
              </li>
              <li>
                <Link to="/shop/kids" className="text-gray-300 hover:text-white transition-colors">Kids</Link>
              </li>
              <li>
                <Link to="/shop/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/shop/footwear" className="text-gray-300 hover:text-white transition-colors">Footwear</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-trendify-teal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Shop</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-trendify-teal">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-gray-300 hover:text-white transition-colors">Shipping</a>
              </li>
              <li>
                <a href="#returns" className="text-gray-300 hover:text-white transition-colors">Returns</a>
              </li>
              <li>
                <a href="#sizing" className="text-gray-300 hover:text-white transition-colors">Sizing Guide</a>
              </li>
              <li>
                <a href="#track" className="text-gray-300 hover:text-white transition-colors">Track Order</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-trendify-teal">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-trendify-teal flex-shrink-0" />
                <span className="text-gray-300">123 Fashion St, Style City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-trendify-teal flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-trendify-teal flex-shrink-0" />
                <a href="mailto:info@trendify.com" className="text-gray-300 hover:text-white transition-colors">info@trendify.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter & Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} Trendify. All rights reserved.
              </p>
            </div>
            <div className="md:flex md:justify-end">
              <div className="flex flex-col md:flex-row items-center">
                <p className="text-sm text-gray-400 mr-2 mb-2 md:mb-0">Subscribe to our newsletter:</p>
                <div className="flex w-full md:w-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-2 bg-gray-800 text-sm rounded-l-md border-0 focus:outline-none focus:ring-1 focus:ring-trendify-teal flex-grow"
                  />
                  <button className="bg-trendify-teal text-white px-4 py-2 text-sm rounded-r-md hover:bg-opacity-90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
