import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = []; // example placeholder

  return (
    <div className="my-12 px-4 md:px-0 animate-fade-in">
      <Card className="bg-emerald-50">
        <CardContent className="pt-8 pb-10 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-green-800">
              Customer Reviews
            </h2>

            <div className="flex justify-center">
              <div className="flex items-center space-x-2 text-amber-400 animate-pulse">
                <Star fill="currentColor" strokeWidth={1} />
                <Star fill="currentColor" strokeWidth={1} />
                <Star fill="currentColor" strokeWidth={1} />
              </div>
            </div>

            <div className="text-lg text-green-600 font-medium">
              We're looking for stars!
            </div>

            <p className="text-gray-600 max-w-md mx-auto">
              Let us know what you think about our Turmeric & Ginger Shot. Your
              feedback helps others make informed decisions.
            </p>

            <div className="pt-2">
              <Button className="bg-teal-700 text-white hover:bg-teal-800 shadow-sm hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md">
                Be the first to write a review!
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length > 0
            ? reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <Card className="border-amber-100 hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="font-medium text-amber-800">{review.name}</div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-1">{review.date}</div>
        <div className="mt-3 text-gray-700">{review.comment}</div>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
