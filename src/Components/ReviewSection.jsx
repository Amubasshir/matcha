import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      date: "May 15, 2025",
      comment:
        "Absolutely loved the Turmeric & Ginger Shot! Felt energized and refreshed.",
    },
    {
      id: 2,
      name: "Glenstar",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      date: "May 18, 2025",
      comment: "Great taste and very effective. Would recommend it to anyone!",
    },
    {
      id: 3,
      name: "Franco",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      date: "May 20, 2025",
      comment:
        "Felt a noticeable improvement in digestion. Highly recommended!",
    },
    {
      id: 4,
      name: "David",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      date: "May 20, 2025",
      comment: "Tastes amazing and works wonders. I feel more active now!",
    },
    {
      id: 5,
      name: "Emily",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      date: "May 22, 2025",
      comment: "My daily go-to for wellness. Loved it!",
    },
    {
      id: 6,
      name: "Rajib",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      date: "May 23, 2025",
      comment: "Amazing product with real results. 10/10",
    },
  ];

  return (
    <div className="my-12 px-4 md:px-0">
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-bold">Customer Reviews</h2>
        {/* <div className="flex justify-center gap-1 text-yellow-400 text-xl">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" stroke="currentColor" />
          ))}
        </div> */}
        {/* <p className="font-semibold text-lg text-yellow-500">
          ⭐ 5.0 out of 5 stars from our happy customers!
        </p> */}
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover what our customers are saying about our premium Turmeric &
          Ginger Shot. Join thousands who have made it part of their daily
          wellness routine.
        </p>
      </div>

      {/* Swiper Reviews */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="container mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card className="h-full flex flex-col justify-between p-6 rounded-xl shadow-md bg-opacity-25 min-h-[320px]">
              <CardContent className="flex flex-col justify-between h-full text-center">
                <div>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-24 h-24 mx-auto rounded-full border-2 border-green-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                  <div className="flex justify-center gap-1 text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "fill-yellow-400"
                            : "fill-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {review.comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4">
        <button className=" btn btn-primary">
          Be the first to write a review!
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
