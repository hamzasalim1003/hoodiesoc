import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
  const allProducts = [
    {
      id: 1,
      name: "LSE ISOC Hoodie Collab",
      description: "London School of Economics Islamic Society collaborative hoodie featuring 'Mercy is in our Actions' design with Arabic calligraphy and world artwork",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.19_d1299711.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.19_d1299711.jpg",
      price: "£25.99",
      category: "collab"
    },
    {
      id: 2,
      name: "UCL ISOC Hoodie Collab",
      description: "University College London Islamic Society collaborative hoodie with powerful servant leadership design and Arabic text",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_962499a1.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_962499a1.jpg",
      price: "£25.99",
      category: "collab"
    },
    {
      id: 3,
      name: "KCL EC Gilet Collab",
      description: "King's College London Executive Committee sleeveless gilet featuring custom university crest with personalized name printing",
      frontImage: "/whatsapp_image_2025-12-09_at_09.15.06_b91ca4fa.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.15.06_b91ca4fa.jpg",
      price: "£32.99",
      category: "executive"
    },
    {
      id: 4,
      name: "KCL EC Base Layer Collab",
      description: "King's College London Executive Committee quarter-zip base layer with embroidered crest, perfect for society leaders",
      frontImage: "/whatsapp_image_2025-12-09_at_09.15.03_75f60bd2.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.15.03_75f60bd2.jpg",
      price: "£35.99",
      category: "executive"
    },
    {
      id: 5,
      name: "KCL EC Jacket Collab",
      description: "King's College London Executive Committee jacket featuring botanical design and custom university crest",
      frontImage: "/whatsapp_image_2025-12-09_at_11.03.48_251931a6.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_11.03.48_251931a6.jpg",
      price: "£39.99",
      category: "executive"
    },
    {
      id: 6,
      name: "Aston ACS Hoodie Collab",
      description: "Aston University Asian Cultural Society collaborative hoodie featuring intricate Om mandala design with Sanskrit text and cultural symbolism",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.20_a57e09e5.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.20_a57e09e5.jpg",
      price: "£25.99",
      category: "collab"
    },
    {
      id: 7,
      name: "PakSoc Hoodie Collab",
      description: "Pakistan Society collaborative hoodie featuring powerful Palestine solidarity design with golden wings and Arabic calligraphy",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_3e1124c4.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_3e1124c4.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 8,
      name: "KCL ACMS Collab",
      description: "King's College London African Caribbean Medical Society collaborative hoodie with 'In Unity There is Strength' message and artistic design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_8905395e.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_8905395e.jpg",
      price: "£26.99",
      category: "collab"
    },
    {
      id: 9,
      name: "KCL NASOC Hoodie Collab",
      description: "King's College London North African Society hoodie celebrating cultural heritage and community pride",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
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