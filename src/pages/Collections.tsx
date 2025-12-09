import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
  const allProducts = [
    {
      id: 1,
      name: "ISOC Hoodies",
      description: "Islamic Society designs with beautiful Arabic calligraphy and traditional patterns",
      frontImage: "/WhatsApp Image 2025-09-10 at 20.29.03_26f58a5f.jpg",
      backImage: "/WhatsApp Image 2025-09-10 at 20.29.03_d97fb64c.jpg",
      price: "£25.99",
      category: "islamic"
    },
    {
      id: 2,
      name: "SikhSoc Hoodies",
      description: "Sikh Society designs featuring Punjabi text and cultural symbols",
      frontImage: "/WhatsApp Image 2025-09-10 at 20.28.33_f17623f6.jpg",
      backImage: "/WhatsApp Image 2025-09-10 at 20.28.33_f17623f6.jpg",
      price: "£25.99",
      category: "sikh"
    },
    {
      id: 3,
      name: "Palestine Hoodies",
      description: "Supporting Palestinian causes with meaningful designs and symbols",
      frontImage: "/WhatsApp Image 2025-09-10 at 20.28.32_6eb50a14.jpg",
      backImage: "/WhatsApp Image 2025-09-10 at 20.28.32_6eb50a14.jpg",
      price: "£27.99",
      category: "palestine"
    },
    {
      id: 4,
      name: "Palestine Hoodies - Cream",
      description: "Palestine solidarity hoodies in cream colorway with beautiful Arabic calligraphy",
      frontImage: "/files_5415238-1758390586313-WhatsApp Image 2025-09-10 at 20.28.32_978053a5.jpg",
      backImage: "/files_5415238-1758390621116-WhatsApp Image 2025-09-10 at 20.28.32_f51de79f.jpg",
      price: "£27.99",
      category: "palestine"
    },
    {
      id: 5,
      name: "Foxes FC Jersey",
      description: "Professional sports jersey for university football teams with custom team branding",
      frontImage: "/files_5415238-1758390791464-fox.jpg",
      backImage: "/files_5415238-1758390791464-fox.jpg",
      price: "£29.99",
      category: "sports"
    },
    {
      id: 6,
      name: "Tigers FC Jersey",
      description: "Custom sports jersey with dynamic tiger design for university sports teams",
      frontImage: "/files_5415238-1758390799383-tiger.jpg",
      backImage: "/files_5415238-1758390799383-tiger.jpg",
      price: "£29.99",
      category: "sports"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Collections</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our range of premium hoodies and sports jerseys designed specifically for university societies. 
            Each collection celebrates cultural identity and team spirit while maintaining modern style and comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See Your Society?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We create custom designs for any society. Get in touch to discuss your unique requirements.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200"
            >
              Start Your Society Order Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;