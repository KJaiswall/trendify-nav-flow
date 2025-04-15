import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Heart, ShoppingBag, Share2, Star } from "lucide-react";
import RecommendationSection from "../components/RecommendationSection";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  // Mock product data
  const mockProducts = [
    {
      id: "1",
      name: "Classic Fit T-Shirt",
      category: "men",
      price: 29.99,
      originalPrice: 39.99,
      brand: "Nike",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=500&auto=format&fit=crop",
      ],
      description: "A comfortable classic fit t-shirt perfect for everyday wear. Made from 100% cotton, this t-shirt features a ribbed crew neckline and short sleeves.",
      features: [
        "100% cotton fabric",
        "Ribbed crew neckline",
        "Machine washable",
        "Regular fit",
      ],
      rating: 4.5,
      reviewCount: 128,
    },
    // ... other products
  ];

  // Mock similar products
  const mockSimilarProducts = [
    {
      id: 17,
      name: "V-Neck T-Shirt",
      category: "men",
      price: 24.99,
      originalPrice: 24.99,
      brand: "Nike",
      color: "Gray",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop",
      rating: 4.3,
    },
    {
      id: 18,
      name: "Graphic Print T-Shirt",
      category: "men",
      price: 34.99,
      originalPrice: 34.99,
      brand: "Adidas",
      color: "White",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=500&auto=format&fit=crop",
      rating: 4.1,
    },
    {
      id: 19,
      name: "Long-Sleeve Henley",
      category: "men",
      price: 39.99,
      originalPrice: 49.99,
      brand: "Under Armour",
      color: "Navy",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=500&auto=format&fit=crop",
      rating: 4.6,
    },
    {
      id: 20,
      name: "Polo Shirt",
      category: "men",
      price: 44.99,
      originalPrice: 44.99,
      brand: "Lacoste",
      color: "Green",
      sizes: ["S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop",
      rating: 4.4,
    },
  ];

  // Fetch product data
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundProduct = mockProducts.find((p) => p.id === id) || {
        id,
        name: "Product " + id,
        category: "men",
        price: 39.99,
        originalPrice: 59.99,
        brand: "Example Brand",
        color: "Blue",
        sizes: ["S", "M", "L", "XL"],
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
        ],
        description: "This is a sample product description.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        rating: 4.0,
        reviewCount: 42,
      };
      
      setProduct(foundProduct);
      setSimilarProducts(mockSimilarProducts);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      toast.error("Please select a size");
      return;
    }
    
    toast.success(`${product.name} added to your cart`);
    // In a real app, this would dispatch an action to add to cart
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      toast.success(`${product.name} added to your wishlist`);
    } else {
      toast.info(`${product.name} removed from your wishlist`);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  // Display loading state
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg"></div>
              <div className="md:w-1/2">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
                <div className="h-24 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="text-sm text-gray-500">{product.brand}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-trendify-charcoal mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.price < product.originalPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-trendify-coral">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-trendify-coral text-white text-xs font-bold px-2 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Color & Size */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Color: {product.color}</h3>
              
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2">Size:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium 
                          ${
                            selectedSize === size
                              ? "bg-trendify-teal text-white border-trendify-teal"
                              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity:</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-full text-center focus:outline-none py-2"
                />
                <button
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-trendify-teal text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button
                onClick={handleAddToWishlist}
                className={`p-3 rounded-md border ${
                  isWishlisted
                    ? "bg-trendify-coral text-white border-trendify-coral"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Heart className={isWishlisted ? "fill-current" : ""} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* AI Recommendation Section */}
      <RecommendationSection 
        title="Because You Liked This" 
        description="Customers who viewed this item also viewed"
        products={similarProducts} 
      />
    </div>
  );
};

export default ProductDetails;
