
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecommendationSection from "../components/RecommendationSection";
import { useCart } from "../context/CartContext";
import { Star, Minus, Plus, ShoppingBag } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();

  // Mock products data
  const mockProducts = [
    {
      id: "1",
      name: "Classic Fit T-Shirt",
      category: "men",
      price: 29.99,
      originalPrice: 39.99,
      brand: "Nike",
      colors: ["Blue", "Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
      ],
      rating: 4.5,
      reviewCount: 127,
      description: "A comfortable and stylish classic fit t-shirt made from premium cotton. Perfect for everyday wear and various occasions.",
      features: [
        "Made from 100% premium cotton",
        "Breathable fabric for all-day comfort",
        "Machine washable",
        "Classic fit design",
        "Reinforced stitching for durability",
      ],
      specifications: {
        material: "100% Cotton",
        care: "Machine wash cold, tumble dry low",
        imported: "Yes",
        fit: "Classic Fit",
      },
    },
    {
      id: "2",
      name: "Floral Summer Dress",
      category: "women",
      price: 49.99,
      originalPrice: 69.99,
      brand: "Zara",
      colors: ["Pink", "Yellow", "Blue"],
      sizes: ["XS", "S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
      ],
      rating: 4.2,
      reviewCount: 84,
      description: "A beautiful floral summer dress featuring a flattering silhouette and lightweight fabric. Perfect for warm days and special occasions.",
      features: [
        "Lightweight, breathable fabric",
        "Floral print pattern",
        "Mid-thigh length",
        "Adjustable straps",
        "Side pockets",
      ],
      specifications: {
        material: "95% Polyester, 5% Elastane",
        care: "Hand wash cold, line dry",
        imported: "Yes",
        fit: "Regular Fit",
      },
    },
  ];

  useEffect(() => {
    // In a real app, this would be an API call to get product details
    setTimeout(() => {
      const foundProduct = mockProducts.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        // Set default values for size and color
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // Get recommended products
  const getRecommendedProducts = () => {
    return mockProducts.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category,
      price: p.price,
      originalPrice: p.originalPrice,
      brand: p.brand,
      color: p.colors[0],
      sizes: p.sizes,
      image: p.images[0],
      rating: p.rating,
    }));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      alert("Please select a size");
      return;
    }

    if (!selectedColor && product.colors && product.colors.length > 0) {
      alert("Please select a color");
      return;
    }

    addToCart(
      {
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
      quantity,
      selectedSize,
      selectedColor
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-32 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-48 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
            <p className="mt-4">We couldn't find the product you were looking for.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="w-full h-96 overflow-hidden rounded-lg">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 overflow-hidden rounded-md flex-shrink-0 ${
                    mainImage === img ? "ring-2 ring-trendify-teal" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm text-gray-500 uppercase tracking-wider">
                {product.brand}
              </h2>
              <h1 className="text-3xl font-bold mt-1">{product.name}</h1>

              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={`${
                        index < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl font-bold mr-3">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="ml-3 text-sm bg-red-100 text-red-700 px-2 py-0.5 rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <div>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700">Color</h3>
                <div className="flex items-center space-x-3 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-trendify-teal"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === "white" ? "1px solid #e5e7eb" : "",
                      }}
                      aria-label={color}
                    ></button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Selected: {selectedColor}
                </p>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700">Size</h3>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-md text-center ${
                        selectedSize === size
                          ? "bg-trendify-teal text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Quantity</h3>
              <div className="flex items-center mt-2">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-l-md"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 h-10 bg-white border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-r-md"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-trendify-teal hover:bg-teal-600 text-white py-3 px-6 rounded-md flex items-center justify-center"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Features
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-500 capitalize">{key}</p>
                    <p className="text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
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

export default ProductDetails;
