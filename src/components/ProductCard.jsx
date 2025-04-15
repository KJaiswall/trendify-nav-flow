
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id, name, price, originalPrice, image, brand, rating } = product;
  
  const isOnSale = price < originalPrice;
  const discountPercentage = isOnSale
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      toast.success(`${name} added to your wishlist`);
    } else {
      toast.info(`${name} removed from your wishlist`);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    toast.success(`${name} added to your cart`);
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Product Image with Overlay Actions */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Sale Badge */}
          {isOnSale && (
            <div className="absolute top-2 left-2 bg-trendify-coral text-white text-xs font-bold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
            <button
              onClick={handleAddToWishlist}
              className={`p-2 rounded-full ${
                isWishlisted ? "bg-trendify-coral" : "bg-white"
              }`}
            >
              <Heart
                className={`h-5 w-5 ${
                  isWishlisted ? "text-white fill-current" : "text-trendify-charcoal"
                }`}
              />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="p-2 bg-trendify-teal rounded-full"
            >
              <ShoppingBag className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{brand}</div>
          <h3 className="font-medium text-trendify-charcoal line-clamp-1">
            {name}
          </h3>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isOnSale ? (
                <>
                  <span className="font-bold text-trendify-coral">
                    ${price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="font-bold">${price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center">
              <span className="text-yellow-500 text-sm">★</span>
              <span className="text-sm ml-1">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
