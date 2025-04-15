
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecommendationSection from "../components/RecommendationSection";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593726853624-cebad37b9979?q=80&w=800&auto=format&fit=crop",
      ],
      rating: 4.5,
      reviews: 128,
      description: "This classic-fit t-shirt is made with premium cotton material that provides exceptional comfort throughout the day. It features a ribbed neckline and reinforced seams for durability. Perfect for casual outings or relaxing at home, this versatile piece is a must-have in every wardrobe.",
      features: [
        "Made from 100% premium cotton",
        "Ribbed crewneck",
        "Regular fit",
        "Machine washable",
        "Breathable fabric"
      ]
    },
    {
      id: "2",
      name: "Floral Summer Dress",
      category: "women",
      price: 49.99,
      originalPrice: 69.99,
      brand: "Zara",
      color: "Pink",
      sizes: ["XS", "S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1623118304640-9f1b142ea2a1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600092072104-c3ebc74deff0?q=80&w=800&auto=format&fit=crop",
      ],
      rating: 4.2,
      reviews: 86,
      description: "This beautiful floral dress features a flattering A-line silhouette and adjustable spaghetti straps. The lightweight, breathable fabric makes it perfect for warm summer days. The unique floral print adds a touch of elegance, making this piece suitable for both casual outings and special occasions.",
      features: [
        "Lightweight polyester blend",
        "A-line silhouette",
        "Adjustable straps",
        "Back zipper closure",
        "Side pockets"
      ]
    },
    {
      id: "3",
      name: "Kids Dinosaur Sweater",
      category: "kids",
      price: 24.99,
      originalPrice: 34.99,
      brand: "H&M",
      color: "Green",
      sizes: ["3T", "4T", "5T"],
      images: [
        "https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop",
      ],
      rating: 4.8,
      reviews: 64,
      description: "This adorable dinosaur sweater will keep your little one warm and stylish. Made with soft, hypoallergenic materials that are gentle on sensitive skin, it features fun 3D dinosaur spikes along the hood and back. The easy-to-use zipper makes dressing hassle-free, while the durable construction withstands active play.",
      features: [
        "Soft cotton blend",
        "3D dinosaur details",
        "Full front zipper",
        "Machine washable",
        "Ribbed cuffs and hem"
      ]
    },
    // ... more products
  ];

  // Fetch product details
  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Default to first size
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-xl">Loading product details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to your cart`);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success(`Added ${product.name} to your wishlist`);
    } else {
      toast.info(`Removed ${product.name} from your wishlist`);
    }
  };

  const handleShare = () => {
    // Implement share functionality here
    toast.success("Share link copied to clipboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden aspect-square cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-2 text-gray-600">{product.brand}</div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.price < product.originalPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-trendify-coral mr-2">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 bg-trendify-coral text-white text-xs font-bold px-2 py-1 rounded">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
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
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Color and Size Selection */}
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Color:</h3>
                <div className="flex items-center">
                  <span
                    className="w-8 h-8 rounded-full border-2 border-trendify-teal"
                    style={{ backgroundColor: product.color.toLowerCase() }}
                  ></span>
                  <span className="ml-2">{product.color}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Size: <span className="text-sm font-normal text-gray-500 ml-1">Select a size</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? "border-trendify-teal bg-trendify-teal text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity:</h3>
              <div className="flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-gray-300 px-4 py-2 rounded-l-md"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-t border-b border-gray-300 w-16 text-center"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-300 px-4 py-2 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 bg-trendify-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md flex-grow md:flex-grow-0 md:w-auto"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border ${
                  isWishlisted
                    ? "bg-red-50 border-red-200 text-red-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Heart
                  size={20}
                  className={isWishlisted ? "fill-current" : ""}
                />
                Wishlist
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <RecommendationSection title="Because you liked this" excludeId={id} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
