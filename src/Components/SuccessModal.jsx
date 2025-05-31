import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { useSupabase } from "@/Context/supabaeContext";
import toast from "react-hot-toast";

const SuccessModal = ({ isOpen, onClose }) => {
  const { orderRequestData, isLoading } = useSupabase();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = " Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // if (!formData.number.trim()) newErrors.number = "Phone Number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { success } = await orderRequestData(formData);
    if (success) {
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      // Close modal
      onClose();

      // Optional: Success alert
      toast.success("You have been added to the waitlist!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="modal-container bg-white rounded-lg shadow-lg relative max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close (X) button */}
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
            {/* Thank You!  */}
            Hey, Thank you for your interest.
          </h2>

          <p className="text-gray-600 mb-6">
            {/* You've been added to our waitlist! Thank you for your interest in
            Perfect Matcha Latte. We'll notify you as soon as we launch! */}
            This is just a test but please join the waitlist.
          </p>

          {/* <p className="text-sm text-gray-500 mb-6">
            Check your email inbox for a confirmation message.
          </p> */}

          {/* input field  */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 space-y-4 text-start">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className={`mt-1 input ${
                      errors.fullname ? "border-red-500 ring-red-500" : ""
                    }`}
                  />
                  {errors.fullname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullname}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 input ${
                      errors.email ? "border-red-500 ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="mt-1 input"
                    // className={`mt-1 input ${
                    //   errors.number ? "border-red-500 ring-red-500" : ""
                    // }`}
                  />
                  {/* {errors.number && (
                    <p className="mt-1 text-sm text-red-500">{errors.number}</p>
                  )} */}
                </div>
              </div>
              {/* Close Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary mt-5"
              >
                Join The Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
