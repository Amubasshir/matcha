import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"; // ensure alias is working

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-[970px] mx-auto">
      <div>
        <h2 className="text-xl py-5 text-green-600">About the product</h2>
        <p>
          A flavor explosion for the senses! This sophisticated drink combines
          spicy ginger and earthy, slightly bitter matcha with the fruity
          sweetness of strawberry pulp, orange juice, and other fruit juices. It
          provides plenty of vitamin C. One shot covers 50 percent of your daily
          Vitamin C needs – the bottle contains five 50-milliliter shots. This
          makes it a refreshing start to the day or a quick pick-me-up. The
          ingredients for the Matcha come from organic farming, and its recipe
          is vegan.
        </p>
        <br />
        <p>
          Tip: If you want to tone down the spiciness, you can dilute it with a
          little water.
        </p>
      </div>
      <div className="mt-12 mb-16 border-t pt-8">
        <Tabs defaultValue="characteristics" className="w-full">
          {/* Tabs Triggers - Hidden on mobile */}
          <TabsList className="border-b w-full flex flex-wrap justify-start mb-4 hidden sm:flex">
            <TabsTrigger
              value="characteristics"
              className="text-base md:text-md font-medium px-4 md:px-6 whitespace-nowrap data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700"
            >
              CHARACTERISTICS
            </TabsTrigger>
            <TabsTrigger
              value="nutritional"
              className="text-base md:text-md font-medium px-4 md:px-6 whitespace-nowrap data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700"
            >
              NUTRITIONAL VALUES
            </TabsTrigger>
          </TabsList>

          {/* Default Tab Content - Always visible on mobile (only CHARACTERISTICS) */}
          <div className="">
            {/* Show default tab content always on mobile */}
            <TabsContent value="characteristics" className="pt-4 block">
              {/* Same as before */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-3">
                    Ingredients
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Apple juice*, orange juice* 15%, mango pulp* 15%, acerola
                    cherry juice*, white grape juice*, ginger juice* 3%,
                    turmeric juice* 3%, lemon juice*, fruit aroma juice
                    concentrate*, white pepper*
                    <br />
                    <span className="italic">*from organic farming</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-700 mb-3">
                    Further Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {[
                      ["Name", "Shot Turmeric & Ginger"],
                      ["Contents", "250 ml"],
                      [
                        "Storage",
                        "Once opened, keep refrigerated and consume within 5 days",
                      ],
                      ["GTIN", "4164420235340"],
                      ["Certificates", "DE-ÖKO-007"],
                      ["Price RRP", "2.99 €"],
                      ["Base Price", "11.96 € / 1 l"],
                    ].map(([label, value], i) => (
                      <div
                        key={i}
                        className="flex justify-between flex-wrap gap-1"
                      >
                        <span className="font-medium">{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>

          {/* Actual tab contents for larger screens */}
          <div className="hidden sm:block">
            <TabsContent value="characteristics" className="pt-4">
              {/* Same content as above */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* ... same ingredients and info as above ... */}
              </div>
            </TabsContent>

            <TabsContent value="nutritional" className="pt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded-md">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "Nutrient",
                        "Per 100ml",
                        "Per 50ml",
                        "% Daily Value*",
                      ].map((h, idx) => (
                        <th
                          key={idx}
                          className="px-4 py-2 text-left font-medium text-green-800 uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      ["Energy", "44 kcal", "22 kcal", "1%"],
                      ["Total Fat", "0.1g", "0.05g", "0%"],
                      ["Carbohydrates", "10.2g", "5.1g", "2%"],
                      ["Sugars", "9.4g", "4.7g", "5%"],
                      ["Protein", "0.3g", "0.15g", "0%"],
                      ["Vitamin C", "80mg", "40mg", "50%"],
                    ].map(([nutrient, val100, val50, daily], idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {nutrient}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{val100}</td>
                        <td className="px-4 py-3 text-gray-700">{val50}</td>
                        <td className="px-4 py-3 text-gray-700">{daily}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-4">
                  *Percent Daily Values are based on a 2,000 calorie diet.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
