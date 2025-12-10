import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const SchoolLeaversPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whatsapp_image_2025-12-09_at_19.55.21_d494b1a4.jpg"
                alt="School Leavers Hoodies 2026"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-lg inline-block">
                  Class of 2026
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="text-yellow-400" size={20} />
              <span className="text-yellow-400 text-sm font-semibold">New for 2026</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              School Leavers <span className="text-yellow-400">Hoodies 2026</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Alongside our university hoodies, Hoodie Sociaty now designs premium leavers hoodies for schools across the UK. Year 6, Year 11 and Sixth Form – all covered with modern designs and an easy process for staff.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-300">Modern, streetwear-inspired designs students love</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-300">Custom designs tailored to your school</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-300">Simple, stress-free process for teachers and staff</p>
              </div>
            </div>

            <Link
              to="/school-leavers"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Explore School Leavers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLeaversPromo;
