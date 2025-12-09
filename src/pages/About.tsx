import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">Hoodie Society</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Founded by university students, for university students
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              We started Hoodie Society to solve a problem we knew all too well – the struggle of ordering 
              quality merch for university societies. As students ourselves, we experienced the frustration 
              of long lead times, poor quality, and expensive minimums that made ordering hoodies a headache 
              rather than an exciting project.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              That's why we built Hoodie Society differently. We specialize in fast turnarounds, 
              bulk-friendly pricing, and most importantly, we understand the unique needs of cultural 
              and religious societies. Whether you need Arabic calligraphy, Punjabi text, or custom 
              designs that reflect your community's identity, we've got you covered.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every hoodie we create is designed with pride, printed with precision, and delivered with 
              the urgency that student life demands. We're not just a printing service – we're your 
              partner in building community and celebrating identity.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Student-Focused</h3>
            <p className="text-gray-400 leading-relaxed">
              Built by students who understand the unique challenges of society ordering and university deadlines.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quality First</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium materials, precise printing, and attention to detail in every hoodie we create.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
            <p className="text-gray-400 leading-relaxed">
              Supporting important causes through our collections and giving back to the communities we serve.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black border border-gray-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm">Happy Societies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-gray-400 text-sm">Items Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">48hr</div>
              <div className="text-gray-400 text-sm">Average Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">£10K+</div>
              <div className="text-gray-400 text-sm">Raised for Causes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;