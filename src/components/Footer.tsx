import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/hdie Society (1) (1).png" alt="Hoodie Society" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded by university students, Hoodie Society specializes in high-quality, 
              personalized hoodies and sports jerseys for university societies. Fast delivery, bulk discounts, 
              and free personalization included.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the.hoodie.society/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@hoodiesociety.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+44123456789"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-yellow-400 transition-colors">Collections</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Bulk Orders</span></li>
              <li><span className="text-gray-400">Custom Design</span></li>
              <li><span className="text-gray-400">Fast Delivery</span></li>
              <li><span className="text-gray-400">Sports Jerseys</span></li>
              <li><span className="text-gray-400">Free Personalization</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hoodie Society. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for university societies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;