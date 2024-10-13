// Testimonials.tsx

"use client";

import { useState } from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import testimonials, { TestimonialProps } from "@/data/testimonialsdb"; // Adjust the path as necessary

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array(5).fill(0).map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? "text-yellow-500" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.465 10.9 0 6.36l6.23-.938L10 0l3.77 5.422L20 6.36l-5.465 4.54 1.343 7.19L10 15z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) >= testimonials.length ? 0 : prevIndex + 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
  };

  return (
    <div className="sm:py-24 bg-gray-100">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="w-full flex items-center justify-center mb-12 px-4">
          <p className="max-w-prose text-center">
            Our clients value our innovative solutions, strategic planning, and responsive support. Their feedback highlights our dedication to top-quality, timely delivery, and consistent results.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="inline-block w-full md:w-1/2 p-4">
                  <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="flex items-center mb-4">
                      <Image className="h-24 w-24 rounded-full mr-4" src={testimonial.imagePath} width={100} height={100} alt={`Profile of ${testimonial.name}`} />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                        <p className='text-gray-400 text-xs'>{testimonial.title}</p>
                        <div className="flex items-center mt-2">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 text-center overflow-hidden overflow-ellipsis whitespace-pre-line">&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between">
            <button onClick={prevSlide} className="p-2 bg-gray-400 text-white rounded-full w-10 hover:bg-gray-700">
              &#10094;
            </button>
            <button onClick={nextSlide} className="p-2 bg-gray-400 text-white rounded-full w-10 hover:bg-gray-700">
              &#10095;
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
