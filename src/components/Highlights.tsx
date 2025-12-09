import React from 'react';
import { Truck, DollarSign, Palette } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      description: "Quick turnaround times to meet your society's deadlines"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Bulk Discounts",
      description: "Better prices for larger orders - perfect for societies"
    },
    {
      icon: <Palette size={32} />,
      title: "Free Personalization",
      description: "Names in English, Arabic, or Punjabi at no extra cost"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-400">Hoodie Society?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We understand what university societies need - quality, speed, and affordability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-black border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="text-yellow-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;