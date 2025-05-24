import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import image1 from "../assets/lovable-uploads/1.png";
import image2 from "../assets/lovable-uploads/2.png";
import image3 from "../assets/lovable-uploads/3.png";
const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1 of what to do",
      title:
        "How to use the product to achieve that goal and what benefit it brings",
      description:
        "Help people imagine the benefits they'll get at this stage.",
      image: image1,
    },
    {
      step: "Step 2 of what to do",
      title:
        "How to use the product to achieve that goal and what benefit it brings",
      description:
        "Help people imagine the benefits they'll get at this stage.",
      image: image2,
    },
    {
      step: "Step 3 of what to do",
      title:
        "How to use the product to achieve that goal and what benefit it brings",
      description:
        "Help people imagine the benefits they'll get at this stage.",
      image: image3,
    },
  ];

  return (
    <section className="py-16 ">
      {/* Background Image with Overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div> */}

      {/* Content */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-black inline-block text-transparent bg-clip-text">
            How It Works
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
              } items-center gap-8 mb-20 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-1/2">
                <div className=" max-w-md mx-auto flex items-center justify-center ">
                  <img
                    className="h-72 shadow-lg"
                    src={step?.image}
                    alt={`step ${index + 1}`}
                  />
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
                <Button className="bg-[#035718] text-white hover:bg-[#459843] shadow-sm  transition-transform hover:scale-105 duration-300 group">
                  Learn more
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {/* CTA Section based on the provided image */}
      <div
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
          <Button className="bg-[#035718] text-white hover:bg-[#459843] shadow-sm transition-transform hover:scale-105 duration-300 text-lg font-medium rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
