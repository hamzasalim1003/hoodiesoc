import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "Amazing quality hoodies and super fast delivery! Our Islamic Society members absolutely love them.",
      author: "Amira K.",
      society: "UCL Islamic Society"
    },
    {
      quote: "The personalization in Punjabi text was perfect. Great service and brilliant hoodies!",
      author: "Harpreet S.",
      society: "Birmingham SikhSoc"
    },
    {
      quote: "Professional service from start to finish. Our Palestine hoodies raised awareness and looked incredible.",
      author: "Omar M.",
      society: "Manchester PalSoc"
    },
    {
      quote: "Bulk discount made it affordable for our entire committee. Will definitely order again!",
      author: "Sarah L.",
      society: "Leeds University Society"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What <span className="text-yellow-400">Societies Say</span>
          </h2>
        </div>

        <div className="relative">
          <div className="bg-black border border-gray-700 rounded-xl p-8 md:p-12">
            <Quote size={40} className="text-yellow-400 mb-6" />
            
            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-gray-400">
              <p className="font-medium text-yellow-400">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm">
                {testimonials[currentIndex].society}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;