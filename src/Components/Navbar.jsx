import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchValue);
  };

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Top banner */}
      <div className="bg-teal-700 text-white text-center py-2 text-sm font-medium">
        FREE UK SHIPPING £35+
      </div>

      {/* Main navbar */}
      <nav
        className={`relative w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container-custom mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                className="lg:hidden mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <a href="#" className="flex items-center">
                <Leaf className="h-8 w-8 text-teal-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Perfect Matcha
                </span>
              </a>
            </div>

            {/* Search bar - desktop */}
            <div className="hidden md:block flex-grow max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search Perfect Matcha..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-teal-500"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>

            {/* Right nav items */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hidden md:block text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Account
              </a>
              <div className="relative">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <ShoppingBag className="h-6 w-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-teal-600 text-white text-xs font-bold rounded-full">
                      {getTotalItems()}
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Search bar - mobile */}
          <div className="mt-3 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search Perfect Matcha..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-teal-500"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>
        </div>
      </nav>

      {/* Category navbar */}
      <div className="bg-white border-t border-b border-gray-200 shadow-sm">
        <div className="container-custom mx-auto">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-2">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Original Matcha
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Flavoured
            </a>
            <a
              href="#"
              className="text-sm font-medium text-teal-700 border-b-2 border-teal-600 px-3 py-2"
            >
              Lattes
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Pods
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Energy Drinks
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Bundles
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2"
            >
              Wholesale
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-lg z-50 animate-fade-in">
          <div className="py-2 space-y-1">
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Original Matcha
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Flavoured
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-teal-700 bg-gray-50"
            >
              Lattes
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Pods
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Energy Drinks
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Bundles
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Wholesale
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
