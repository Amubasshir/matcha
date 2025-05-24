import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import matchaImage from "../assets/lovable-uploads/school matcha drink.png";
const MatchaFeatures = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          <div className="col-span-1 flex justify-end items-end pb-4 order-1 md:order-1">
            <Card className="max-w-xs shadow-md border-green-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  More Matcha Enjoyment
                </h3>
                <p className="text-sm text-gray-600">
                  Finest matcha, creamy consistency, and 20g of protein per
                  serving – for the perfect green power drink.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="hidden md:block col-span-1 order-2" />

          <div className="col-span-1 flex justify-start items-end pb-4 order-2 md:order-3">
            <Card className="max-w-xs shadow-md border-green-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  With caffeine kick!
                </h3>
                <p className="text-sm text-gray-600">
                  Each serving contains 85 mg of caffeine - comparable to a cup
                  of cappuccino, perfect for your energy boost.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 md:col-span-3 flex items-center justify-center order-3 md:order-4 my-8 md:my-0 md:absolute md:inset-0 z-10 pointer-events-none">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 bg-green-100/50  rounded-full blur-xl" />
              <img
                src={matchaImage}
                alt="Matcha Splash"
                className="w-full h-full object-contain z-10 relative"
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-end items-start pt-4 order-4 md:order-5">
            <Card className="max-w-xs shadow-md border-green-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Weight Loss Support!
                </h3>
                <p className="text-sm text-gray-600">
                  With glucomannan, which has been proven to support weight loss
                  - ideal for your conscious diet.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="hidden md:block col-span-1 order-6" />

          <div className="col-span-1 flex justify-start items-start pt-4 order-5 md:order-7">
            <Card className="max-w-xs shadow-md border-green-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  No added sugar!
                </h3>
                <p className="text-sm text-gray-600">
                  Contains only naturally occurring sugars and 95% less sugar
                  than conventional instant matcha latte products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-green-100 opacity-60" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-green-200 opacity-60" />

      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]">
        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-green-200 rounded-tl-xl -translate-x-24 -translate-y-24" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-green-200 rounded-tr-xl translate-x-24 -translate-y-24" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-green-200 rounded-bl-xl -translate-x-24 translate-y-24" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-green-200 rounded-br-xl translate-x-24 translate-y-24" />
      </div>

      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-[180px] -translate-y-[180px] w-3 h-3 bg-green-300 rounded-full" />
      <div className="hidden md:block absolute top-1/2 left-1/2 translate-x-[180px] -translate-y-[180px] w-3 h-3 bg-green-300 rounded-full" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-[180px] translate-y-[180px] w-3 h-3 bg-green-300 rounded-full" />
      <div className="hidden md:block absolute top-1/2 left-1/2 translate-x-[180px] translate-y-[180px] w-3 h-3 bg-green-300 rounded-full" />
    </section>
  );
};

export default MatchaFeatures;
