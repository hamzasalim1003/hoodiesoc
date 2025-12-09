import React from 'react';
import { Heart } from 'lucide-react';

const CauseSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 p-4 rounded-full">
            <Heart size={32} className="text-white fill-current" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Supporting <span className="text-red-400">Important Causes</span>
        </h2>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Profits from our Palestine hoodie collection go directly to 
          <span className="text-red-400 font-medium"> Medical Aid for Palestine</span>, 
          helping provide essential healthcare to those who need it most.
        </p>
        
        <div className="mt-8 p-6 bg-black border border-gray-700 rounded-xl">
          <p className="text-sm text-gray-400">
            Every purchase makes a difference. Thank you for supporting both your society and important humanitarian causes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CauseSection;