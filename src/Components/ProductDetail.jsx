import React, { useState } from "react";
import { Star, Plus, Minus, Heart, Share2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";
import toast from "react-hot-toast";

const PRODUCT = {
  id: 1,
  name: "Strawberry Oat Matcha Latte",
  price: 24.95,
  description:
    "Meet your go-to strawberry matcha latte, perfectly chilled and ready to fuel your day. Made with ceremonial-grade matcha from the foothills of Japan and velvety gluten-free oat milk, this balanced blend delivers a natural, smooth boost (contains 50mg caffeine—equivalent to 1 shot of espresso).",
  details:
    "Naturally sweetened with agave, it contains no refined sugar, artificial sweeteners, or synthetic caffeine.",
  additionalInfo: "12 cans per case",
  image:
    "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  thumbnails: [
    "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5946630/pexels-photo-5946630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/6100253/pexels-photo-6100253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  rating: 4.8,
  reviews: 124,
  inStock: true,
  features: [
    "Ceremonial-grade matcha",
    "Gluten-free oat milk",
    "50mg natural caffeine",
    "No artificial sweeteners",
    "Vegan-friendly",
  ],
};

const ProductDetail = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(PRODUCT.image);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    quantity > 1 && setQuantity((prev) => prev - 1);

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      image: PRODUCT.image,
      quantity,
    });
    toast.success(`${quantity} ${PRODUCT.name} added to cart!`);
    setIsCheckoutModalOpen(true);
  };

  const formatPrice = (price) => `€${price.toFixed(2)}`;

  return (
    <div className="container-custom py-6 md:py-12">
      {/* <nav className="flex mb-6 text-sm">
        <a href="#" className="text-gray-500 hover:text-teal-600">
          Home
        </a>
        <span className="mx-2 text-gray-400">/</span>
        <a href="#" className="text-gray-500 hover:text-teal-600">
          Shop All Matcha Lattes
        </a>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-teal-700 font-medium">
          Strawberry Oat Matcha Latte
        </span>
      </nav> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-sm h-[400px] md:h-[500px] flex items-center justify-center">
            {PRODUCT.inStock && (
              <div className="ribbon h-16 w-16 flex items-start justify-center pt-2">
                NEW
              </div>
            )}
            <img
              src={selectedImage}
              alt={PRODUCT.name}
              className="product-image-zoom object-contain h-full w-full p-4"
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {PRODUCT.thumbnails.map((thumb, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(thumb)}
                className={`flex-shrink-0 h-20 w-20 rounded-md overflow-hidden border-2 transition-all ${
                  selectedImage === thumb
                    ? "border-teal-500 shadow-md"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={thumb}
                  alt={`${PRODUCT.name} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {PRODUCT.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={
                      i < Math.floor(PRODUCT.rating) ? "currentColor" : "none"
                    }
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {PRODUCT.reviews} reviews
              </span>
            </div>
            <p className="text-2xl font-bold text-teal-700 mb-4">
              {formatPrice(PRODUCT.price)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {PRODUCT.description}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              {PRODUCT.additionalInfo}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="badge badge-green">In Stock</div>
              <div className="badge bg-teal-100 text-teal-800">
                Free Shipping
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-teal-700 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-teal-700 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn btn-primary py-3 px-8 flex-grow flex items-center justify-center space-x-2"
              >
                <span>Add to Cart</span>
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-2">
              <button className="flex items-center text-gray-500 hover:text-teal-700 transition-colors">
                <Heart size={20} className="mr-1" />
                <span className="text-sm">Add to Wishlist</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-teal-700 transition-colors">
                <Share2 size={20} className="mr-1" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* <div className="border-t border-gray-200 pt-6 space-y-4">
            <h3 className="font-medium text-gray-900">Product Features</h3>
            <ul className="space-y-2">
              {PRODUCT.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2">
                    ✓
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-teal-600 py-4 px-1 text-sm font-medium text-teal-700">
              Product Details
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Ingredients
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Reviews
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Shipping & Returns
            </button>
          </nav>
        </div>
        <div className="py-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            About the Product
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A flavor explosion for the senses! This sophisticated drink combines
            spicy ginger and earthy, slightly bitter matcha with the fruity
            sweetness of strawberry pulp, orange juice, and other fruit juices.
            It provides plenty of vitamin C. One shot covers 50 percent of your
            daily Vitamin C needs – the bottle contains five 50-milliliter
            shots. This makes it a refreshing start to the day or a quick
            pick-me-up. The ingredients for the Matcha come from organic
            farming, and its recipe is vegan.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tip: If you want to tone down the spiciness, you can dilute it with
            a little water.
          </p>
        </div>
      </div> */}

      {isCheckoutModalOpen && (
        <CheckoutModal
          isOpen={isCheckoutModalOpen}
          onClose={() => setIsCheckoutModalOpen(false)}
          product={{
            id: PRODUCT.id,
            name: PRODUCT.name,
            price: PRODUCT.price,
            image: PRODUCT.image,
            quantity,
          }}
        />
      )}
    </div>
  );
};

export default ProductDetail;

const ShoppingBag = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);
