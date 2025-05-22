import React from "react";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Success content */}
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Thank You!
          </h2>

          <p className="text-gray-600 mb-6">
            Your order has been received successfully. We'll notify you when
            your order ships.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Check your email inbox for a confirmation message.
          </p>

          <button onClick={onClose} className="btn btn-primary w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
