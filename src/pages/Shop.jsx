
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopSidebar from "../components/ShopSidebar";
import ProductCard from "../components/ProductCard";
import { useIsMobile } from "../hooks/use-mobile";
import { Filter, X } from "lucide-react";

const Shop = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    brands: [],
    colors: [],
    sizes: [],
    priceRange: [0, 500],
    discount: false,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const isMobile = useIsMobile();

  // Mock product data
  const mockProducts = [
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
      id: 3,
      name: "Kids Dinosaur Sweater",
      category: "kids",
      price: 24.99,
      originalPrice: 34.99,
      brand: "H&M",
      color: "Green",
      sizes: ["3T", "4T", "5T"],
      image: "https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=500&auto=format&fit=crop",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Leather Wallet",
      category: "accessories",
      price: 39.99,
      originalPrice: 39.99,
      brand: "Calvin Klein",
      color: "Brown",
      sizes: ["One Size"],
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500&auto=format&fit=crop",
      rating: 4.0,
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
      id: 6,
      name: "Winter Jacket",
      category: "men",
      price: 129.99,
      originalPrice: 179.99,
      brand: "North Face",
      color: "Navy",
      sizes: ["M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop",
      rating: 4.9,
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
    {
      id: 8,
      name: "Summer Sandals",
      category: "footwear",
      price: 34.99,
      originalPrice: 49.99,
      brand: "Steve Madden",
      color: "Tan",
      sizes: ["6", "7", "8", "9"],
      image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=500&auto=format&fit=crop",
      rating: 4.1,
    },
  ];

  // Load products based on category or search query
  useEffect(() => {
    let productsToDisplay = [...mockProducts];
    
    if (category) {
      productsToDisplay = mockProducts.filter(
        (product) => product.category === category
      );
    }
    
    if (query) {
      productsToDisplay = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    setProducts(productsToDisplay);
    setFilteredProducts(productsToDisplay);
  }, [category, query]);

  // Apply filters
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    
    let filtered = [...products];
    
    // Apply brand filter
    if (newFilters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        newFilters.brands.includes(product.brand)
      );
    }
    
    // Apply color filter
    if (newFilters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        newFilters.colors.includes(product.color)
      );
    }
    
    // Apply size filter
    if (newFilters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => newFilters.sizes.includes(size))
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= newFilters.priceRange[0] &&
        product.price <= newFilters.priceRange[1]
    );
    
    // Apply discount filter
    if (newFilters.discount) {
      filtered = filtered.filter(
        (product) => product.originalPrice > product.price
      );
    }
    
    setFilteredProducts(filtered);
  };

  // Get page title based on category or search
  const getPageTitle = () => {
    if (query) {
      return `Search Results for "${query}"`;
    } else if (category) {
      return `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`;
    } else {
      return "All Products";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">{getPageTitle()}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          {isMobile && (
            <div className="mb-4">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Filter size={18} />
                Filter Products
              </button>
            </div>
          )}
          
          {/* Sidebar Filters */}
          {(!isMobile || showMobileFilters) && (
            <div className={`${
              isMobile ? "fixed inset-0 z-50 bg-white p-4 overflow-y-auto" : "w-full md:w-64"
            }`}>
              {/* Mobile Close Button */}
              {isMobile && (
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-1"
                  >
                    <X size={24} />
                  </button>
                </div>
              )}
              
              <ShopSidebar 
                filters={filters} 
                onApplyFilters={applyFilters}
                products={products} 
                onClose={isMobile ? () => setShowMobileFilters(false) : undefined}
              />
            </div>
          )}
          
          {/* Product Grid */}
          <div className="w-full">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No products found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
