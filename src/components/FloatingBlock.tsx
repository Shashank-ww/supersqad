// FloatingBlock.tsx

"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import testimonials, { TestimonialProps } from "@/data/testimonialsdb"; 

const FloatingBlock = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<TestimonialProps>(testimonials[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setCurrentTestimonial(testimonials[randomIndex]);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="floatingblock" className="lg:flex hidden absolute right-[27%] top-[75%] -translate-y-2/3 w-[300px] p-4 h-auto mx-auto backdrop-blur-lg bg-accent/70 rounded-md shadow-lg items-center justify-start space-x-4">
      <Image
        className="h-12 w-12 rounded-full"
        src={currentTestimonial.imagePath}
        width={100}
        height={100}
        alt="Profile photo"
      />
      <div className="flex flex-col">
        <div className="font-semibold text-sm">
          {currentTestimonial.name}
        </div>
        <div className="text-xs">
          {currentTestimonial.title}
        </div>
        <div className="flex space-x-1 pt-1 mt-1">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-3 h-3 ${index < currentTestimonial.rating ? "text-yellow-400" : "text-gray-400"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.287h5.561c.969 0 1.371 1.24.588 1.81l-4.506 3.273 1.718 5.287c.3.921-.755 1.688-1.54 1.11l-4.507-3.273-4.507 3.273c-.785.577-1.84-.189-1.54-1.11l1.717-5.287-4.506-3.273c-.784-.57-.38-1.81.588-1.81h5.561L9.049 2.927z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingBlock;
