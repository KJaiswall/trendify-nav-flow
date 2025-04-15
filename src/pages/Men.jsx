
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopSidebar from "../components/ShopSidebar";
import ProductCard from "../components/ProductCard";
import RecommendationSection from "../components/RecommendationSection";
import { useIsMobile } from "../hooks/use-mobile";
import { Filter, X, ChevronDown } from "lucide-react";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [filters, setFilters] = useState({
    brands: [],
    colors: [],
    sizes: [],
    priceRange: [0, 500],
    discount: false,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  const isMobile = useIsMobile();

  // Mock men's products data
  const mockMenProducts = [
    {
      id: 101,
      name: "Classic Fit T-Shirt",
      category: "men",
      collection: "Essentials",
      price: 29.99,
      originalPrice: 39.99,
      brand: "Nike",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
      rating: 4.5,
    },
    {
      id: 102,
      name: "Slim Fit Jeans",
      category: "men",
      collection: "Denim",
      price: 59.99,
      originalPrice: 79.99,
      brand: "Levi's",
      color: "Blue",
      sizes: ["30", "32", "34", "36"],
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
      rating: 4.3,
    },
    {
      id: 103,
      name: "Oxford Button-Down Shirt",
      category: "men",
      collection: "Formal",
      price: 49.99,
      originalPrice: 49.99,
      brand: "Ralph Lauren",
      color: "White",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
    },
    {
      id: 104,
      name: "Wool Blend Sweater",
      category: "men",
      collection: "Winter",
      price: 89.99,
      originalPrice: 109.99,
      brand: "H&M",
      color: "Gray",
      sizes: ["M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=500&auto=format&fit=crop",
      rating: 4.4,
    },
    {
      id: 105,
      name: "Performance Joggers",
      category: "men",
      collection: "Activewear",
      price: 44.99,
      originalPrice: 59.99,
      brand: "Adidas",
      color: "Black",
      sizes: ["S", "M", "L"],
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500&auto=format&fit=crop",
      rating: 4.6,
    },
    {
      id: 106,
      name: "Leather Bomber Jacket",
      category: "men",
      collection: "Outerwear",
      price: 199.99,
      originalPrice: 249.99,
      brand: "Zara",
      color: "Brown",
      sizes: ["M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop",
      rating: 4.8,
    },
    {
      id: 107,
      name: "Graphic Print T-Shirt",
      category: "men",
      collection: "Casual",
      price: 24.99,
      originalPrice: 29.99,
      brand: "H&M",
      color: "Green",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      rating: 4.2,
    },
    {
      id: 108,
      name: "Tailored Suit",
      category: "men",
      collection: "Formal",
      price: 299.99,
      originalPrice: 399.99,
      brand: "Hugo Boss",
      color: "Navy",
      sizes: ["38R", "40R", "42R", "44R"],
      image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=500&auto=format&fit=crop",
      rating: 4.9,
    },
  ];

  // Load products
  useEffect(() => {
    setProducts(mockMenProducts);
    setFilteredProducts(mockMenProducts);
    
    // Extract available collections
    const availableCollections = [...new Set(mockMenProducts.map(product => product.collection))];
    setCollections(availableCollections);
  }, []);

  // Apply filters and collection filter
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    
    let filtered = [...products];
    
    // Apply collection filter
    if (selectedCollection !== "All") {
      filtered = filtered.filter(product => product.collection === selectedCollection);
    }
    
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

  // Filter by collection
  const handleCollectionChange = (collection) => {
    setSelectedCollection(collection);
    
    let filtered = [...products];
    
    if (collection !== "All") {
      filtered = filtered.filter(product => product.collection === collection);
    }
    
    // Apply existing filters
    applyFilters({
      ...filters,
    });
    
    setFilteredProducts(filtered);
    setShowCollections(false);
  };

  // Get recommended products
  const getRecommendedProducts = () => {
    return mockMenProducts.slice(0, 4);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Men's Collection</h1>
        
        {/* Collections filter */}
        <div className="mb-6">
          <div className="relative">
            <button 
              className="w-full md:w-auto flex items-center justify-between gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              onClick={() => setShowCollections(!showCollections)}
            >
              <span>{selectedCollection} Collection</span>
              <ChevronDown size={16} className={`transition-transform ${showCollections ? 'rotate-180' : ''}`} />
            </button>
            
            {showCollections && (
              <div className="absolute z-10 mt-1 w-full md:w-64 bg-white border border-gray-200 rounded-md shadow-lg">
                <div 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCollectionChange("All")}
                >
                  All Collections
                </div>
                {collections.map((collection) => (
                  <div
                    key={collection}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCollectionChange(collection)}
                  >
                    {collection}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
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
        
        {/* Recommendations Section */}
        <div className="mt-16">
          <RecommendationSection 
            title="You May Also Like" 
            description="Products that complement your style" 
            products={getRecommendedProducts()} 
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Men;
