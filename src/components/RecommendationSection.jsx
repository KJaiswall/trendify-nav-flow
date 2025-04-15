
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ChevronRight } from "lucide-react";

const RecommendationSection = ({ title, description, products }) => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {description && (
              <p className="text-gray-500 mt-1">{description}</p>
            )}
          </div>
          <button 
            onClick={() => navigate("/shop")}
            className="flex items-center gap-1 text-trendify-teal hover:underline"
          >
            View all <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
