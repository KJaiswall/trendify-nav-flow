
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Categories for shop dropdown
  const shopCategories = [
    { name: "Men", path: "/shop/men" },
    { name: "Women", path: "/shop/women" },
    { name: "Kids", path: "/shop/kids" },
    { name: "Accessories", path: "/shop/accessories" },
    { name: "Footwear", path: "/shop/footwear" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setShowDropdown(showDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-trendify-teal">
              Trendify
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-trendify-charcoal hover:text-trendify-teal transition-colors">
                Home
              </Link>
              
              {/* Shop Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={(e) => toggleDropdown(e, "shop")}
                  className="flex items-center text-trendify-charcoal hover:text-trendify-teal transition-colors focus:outline-none"
                >
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {showDropdown === "shop" && (
                  <div className="dropdown-menu animate-fade-in">
                    {shopCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block py-2 hover:text-trendify-teal"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/collections" className="text-trendify-charcoal hover:text-trendify-teal transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-trendify-charcoal hover:text-trendify-teal transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-trendify-charcoal hover:text-trendify-teal transition-colors">
                Contact
              </Link>
            </div>
          )}

          {/* Right Side Icons */}
          <div className="flex items-center">
            {/* Search Bar */}
            {!isMobile && <SearchBar />}

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/wishlist" className="relative">
                <Heart className="h-6 w-6 text-trendify-charcoal hover:text-trendify-coral transition-colors" />
                {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
              </Link>
              <Link to="/cart" className="relative">
                <ShoppingBag className="h-6 w-6 text-trendify-charcoal hover:text-trendify-teal transition-colors" />
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>
              <Link to="/account">
                <User className="h-6 w-6 text-trendify-charcoal hover:text-trendify-teal transition-colors" />
              </Link>

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="ml-2 text-trendify-charcoal focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <SearchBar />
            
            <div className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className="text-trendify-charcoal hover:text-trendify-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Shop Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => toggleDropdown(e, "mobile-shop")}
                  className="flex items-center justify-between w-full text-trendify-charcoal hover:text-trendify-teal transition-colors"
                >
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {showDropdown === "mobile-shop" && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    {shopCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block py-1 hover:text-trendify-teal"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/collections" 
                className="text-trendify-charcoal hover:text-trendify-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className="text-trendify-charcoal hover:text-trendify-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-trendify-charcoal hover:text-trendify-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
