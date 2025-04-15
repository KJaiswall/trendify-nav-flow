
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Mock data for search suggestions
  const mockProducts = [
    { id: 1, name: "Men's Blue T-Shirt", category: "men" },
    { id: 2, name: "Women's Black Dress", category: "women" },
    { id: 3, name: "Kids' Casual Sneakers", category: "kids" },
    { id: 4, name: "Leather Wallet", category: "accessories" },
    { id: 5, name: "Running Shoes", category: "footwear" },
    { id: 6, name: "Winter Jacket", category: "men" },
    { id: 7, name: "Silver Necklace", category: "accessories" },
    { id: 8, name: "Cotton Socks Pack", category: "accessories" },
  ];

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions.slice(0, 5));
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${suggestion.id}`);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-trendify-teal"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </form>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
