import React from "react";
import image1 from "../assets/lovable-uploads/pizza-3010062_1280.jpg";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
const HowWorks = () => {
  const steps = [
    {
      step: "Step 1 of what to do",
      title:
        "Pizza is a popular Italian dish with dough, tomato sauce, cheese, and toppings—baked to perfection and loved by all ages.",
      description:
        "Help people imagine the benefits they'll get at this stage.",
      image: image1,
    },
  ];
  return (
    <div>
      <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-black  inline-block text-transparent bg-clip-text">
            Love at First Slice
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-slate-300 mx-auto"></div>
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isImageRight = index % 2 === 1;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isImageRight ? "md:flex-row-reverse" : ""
              } items-start gap-8 mb-20 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-1/2">
                <div className=" max-w-md mx-auto flex items-center justify-center shadow-lg">
                  <img src={step?.image} alt={`step ${index + 1}`} />
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  {step.step}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                  {step.title}
                </h2>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Button className="bg-[#035718] text-white hover:bg-[#459843] shadow-sm transition-transform hover:scale-105 duration-300 group">
                  Learn more
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWorks;
