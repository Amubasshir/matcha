import { useState } from "react";
import { Button } from "./ui/button";
import SuccessModal from "./SuccessModal";

const WhyActNow = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const handlewitlistClick = () => {
    SetIsModalOpen(true);
  };
  const handleModalClose = () => {
    SetIsModalOpen(false);
  };
  return (
    <div
      id="why-act-now"
      className="mt-16 bg-[#37855269] rounded-xl p-10 shadow-md animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <div className="max-w-3xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Why should people act now?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Some reasons why and shouldn't think too much why they need it. Use
          with strong CTA encouraging immediate action.
        </p>
        <Button
          // onClick={scrollToWhyActNow}
          onClick={handlewitlistClick}
          className="bg-[#035718] text-white hover:bg-[#459843] shadow-sm transition-transform hover:scale-105 duration-300 text-lg font-medium rounded-lg"
        >
          Join the waitlist
        </Button>
        <SuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>
    </div>
  );
};

export default WhyActNow;
