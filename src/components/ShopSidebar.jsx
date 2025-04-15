
import React, { useState, useEffect } from "react";

const ShopSidebar = ({ filters, onApplyFilters, products, onClose }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  
  // Extract available options from products
  const brands = [...new Set(products.map((product) => product.brand))];
  const colors = [...new Set(products.map((product) => product.color))];
  const allSizes = products.map((product) => product.sizes).flat();
  const sizes = [...new Set(allSizes)];
  
  // Get min and max prices
  const prices = products.map((product) => product.price);
  const minPrice = Math.floor(Math.min(...prices, 0));
  const maxPrice = Math.ceil(Math.max(...prices, 500));

  // Handle checkbox changes
  const handleCheckboxChange = (filter, value) => {
    const updatedFilters = { ...localFilters };
    
    if (updatedFilters[filter].includes(value)) {
      updatedFilters[filter] = updatedFilters[filter].filter(
        (item) => item !== value
      );
    } else {
      updatedFilters[filter] = [...updatedFilters[filter], value];
    }
    
    setLocalFilters(updatedFilters);
    onApplyFilters(updatedFilters);
  };

  // Handle price range change
  const handlePriceChange = (index, value) => {
    const updatedPriceRange = [...localFilters.priceRange];
    updatedPriceRange[index] = Number(value);
    
    const updatedFilters = {
      ...localFilters,
      priceRange: updatedPriceRange,
    };
    
    setLocalFilters(updatedFilters);
    onApplyFilters(updatedFilters);
  };

  // Handle discount toggle
  const handleDiscountChange = () => {
    const updatedFilters = {
      ...localFilters,
      discount: !localFilters.discount,
    };
    
    setLocalFilters(updatedFilters);
    onApplyFilters(updatedFilters);
  };

  // Reset all filters
  const resetFilters = () => {
    const resetFilters = {
      brands: [],
      colors: [],
      sizes: [],
      priceRange: [minPrice, maxPrice],
      discount: false,
    };
    
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  // Initialize price range on first load
  useEffect(() => {
    if (localFilters.priceRange[0] === 0 && localFilters.priceRange[1] === 500) {
      setLocalFilters({
        ...localFilters,
        priceRange: [minPrice, maxPrice],
      });
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-trendify-teal hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Brand Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={localFilters.brands.includes(brand)}
                onChange={() => handleCheckboxChange("brands", brand)}
                className="mr-2 rounded"
              />
              <label htmlFor={`brand-${brand}`} className="text-sm">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center">
              <input
                type="checkbox"
                id={`color-${color}`}
                checked={localFilters.colors.includes(color)}
                onChange={() => handleCheckboxChange("colors", color)}
                className="mr-2 rounded"
              />
              <label htmlFor={`color-${color}`} className="text-sm">
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleCheckboxChange("sizes", size)}
              className={`px-3 py-1.5 text-sm border rounded-md 
                ${
                  localFilters.sizes.includes(size)
                    ? "bg-trendify-teal text-white border-trendify-teal"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="border-b pb-4">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm">${localFilters.priceRange[0]}</span>
            <span className="text-sm">${localFilters.priceRange[1]}</span>
          </div>
          <div className="flex gap-4">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={localFilters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
              className="w-full"
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={localFilters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              value={localFilters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
              min={minPrice}
              max={localFilters.priceRange[1]}
              className="w-full border rounded-md px-2 py-1 text-sm"
            />
            <span className="self-center">-</span>
            <input
              type="number"
              value={localFilters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              min={localFilters.priceRange[0]}
              max={maxPrice}
              className="w-full border rounded-md px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Discount Filter */}
      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="discount"
            checked={localFilters.discount}
            onChange={handleDiscountChange}
            className="mr-2 rounded"
          />
          <label htmlFor="discount" className="text-sm font-medium">
            On Sale
          </label>
        </div>
      </div>

      {/* Apply button for mobile */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full bg-trendify-teal text-white py-3 rounded-md hover:bg-opacity-90 transition-colors mt-6"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
};

export default ShopSidebar;
