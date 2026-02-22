import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-16">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/banner45.png"
          alt="Societies and schools in Hoodie Society gear"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content Container with Ultra-Tight Spacing */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full space-y-6">
        {/* Logo */}
        <div className="animate-fade-in">
          <img
            src="/hod_(1).png"
            alt="Hoodie Society"
            className="h-12 md:h-16 lg:h-20 w-auto mx-auto object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Premium School, Sports & Society Apparel
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          UK-based custom apparel for schools, sports teams and university societies, designed to build identity, pride and recognition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            to="/collections"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            Order for Your Society
          </Link>
          <Link
            to="/collections"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            Order for Your School
          </Link>
        </div>

        {/* Trust Indicator */}
        <div className="animate-fade-in-up animation-delay-600">
          <p className="text-gray-400 text-sm mb-1">Trusted by</p>
          <p className="text-yellow-400 text-xl font-bold">30+ Happy Societies and Schools</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;