import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
  const allProducts = [
    {
      id: 1,
      name: "UOB FOP Hoodie Collab",
      description: "University of Birmingham Friends of Palestine collaborative hoodie featuring botanical artwork and cultural symbolism",
      frontImage: "/whatsapp_image_2025-12-09_at_09.25.41_84983985.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.25.41_84983985.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 2,
      name: "Oxford ISOC Hoodie Collab",
      description: "Oxford University Islamic Society collaboration featuring powerful Palestine solidarity design with golden wings",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_3d3958ab.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_3d3958ab.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 3,
      name: "Lancaster ISOC Collab",
      description: "Lancaster University Islamic Society collaborative hoodie with 'In Unity There is Strength' message and artistic design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_4871131e.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_4871131e.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 4,
      name: "KCL NASOC Hoodie Collab",
      description: "King's College London North African Society hoodie celebrating cultural heritage and community pride",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 5,
      name: "LSE ISOC Hoodie Collab",
      description: "London School of Economics Islamic Society collaborative hoodie with 'Mercy is in our Actions' design and Arabic calligraphy",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      price: "£26.99",
      category: "collab"
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
            Explore our exclusive university society collaborations featuring unique designs that celebrate cultural pride, solidarity, and community.
            Each collection is a limited edition partnership, bringing together meaningful artwork and important messages.
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