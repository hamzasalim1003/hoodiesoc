import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
  const allProducts = [
    {
      id: 1,
      name: "ISOC Mercy Hoodie",
      description: "Islamic Society hoodie featuring beautiful Arabic calligraphy with 'Mercy is in our Actions' theme and world design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      price: "£25.99",
      category: "islamic"
    },
    {
      id: 2,
      name: "ISOC Leadership Hoodie",
      description: "Islamic Society hoodie with powerful servant leadership design, Arabic text, and traditional patterns",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_962499a1.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_962499a1.jpg",
      price: "£25.99",
      category: "islamic"
    },
    {
      id: 3,
      name: "KCL EC President Vest",
      description: "Executive committee sleeveless vest featuring custom university crest with personalized name printing",
      frontImage: "/whatsapp_image_2025-12-09_at_09.15.06_1f880fbc.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.15.06_1f880fbc.jpg",
      price: "£32.99",
      category: "executive"
    },
    {
      id: 4,
      name: "KCL EC President Jacket",
      description: "Executive committee quarter-zip jacket with embroidered crest, perfect for society leaders",
      frontImage: "/whatsapp_image_2025-12-09_at_09.15.06_70228bf9.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.15.06_70228bf9.jpg",
      price: "£35.99",
      category: "executive"
    },
    {
      id: 5,
      name: "Hindu Society President Hoodie",
      description: "Hindu Society hoodie featuring intricate Om mandala design with Sanskrit text and cultural symbolism",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_4423f42f.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_4423f42f.jpg",
      price: "£25.99",
      category: "hindu"
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
            Explore our range of premium hoodies, executive wear, and custom apparel designed specifically for university societies.
            Each collection celebrates cultural identity, leadership, and team spirit while maintaining modern style and comfort.
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