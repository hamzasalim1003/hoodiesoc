import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const collections = [
    {
      id: 1,
      name: "UOB FOP Hoodie Collab",
      description: "University of Birmingham Friends of Palestine hoodie with botanical design collaboration",
      frontImage: "/whatsapp_image_2025-12-09_at_09.25.41_84983985.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.25.41_84983985.jpg",
      category: "hoodie",
      type: "Hoodie"
    },
    {
      id: 2,
      name: "Oxford ISOC Hoodie Collab",
      description: "Oxford University Islamic Society collaborative hoodie with Palestine solidarity design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_3d3958ab.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_3d3958ab.jpg",
      category: "hoodie",
      type: "Hoodie"
    },
    {
      id: 3,
      name: "Lancaster ISOC Collab",
      description: "Lancaster University Islamic Society collaborative hoodie with 'In Unity There is Strength' message",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_4871131e.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_4871131e.jpg",
      category: "hoodie",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "KCL NASOC Hoodie Collab",
      description: "King's College London North African Society collaborative hoodie with cultural pride design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.23_c2507593.jpg",
      category: "hoodie",
      type: "Hoodie"
    },
    {
      id: 5,
      name: "LSE ISOC Hoodie Collab",
      description: "London School of Economics Islamic Society collaborative hoodie with inspiring design",
      frontImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      backImage: "/whatsapp_image_2025-12-09_at_09.09.22_678697b2.jpg",
      category: "hoodie",
      type: "Hoodie"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, collections.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  const visibleItems = collections.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Collections</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our exclusive university society collaborations, featuring unique designs that celebrate cultural identity and solidarity
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((collection) => (
              <CollectionCard key={collection.id} product={collection} />
            ))}
          </div>

          {/* Navigation Buttons */}
          {collections.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors duration-200 shadow-lg z-10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors duration-200 shadow-lg z-10"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {collections.length > itemsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/collections"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  frontImage: string;
  backImage: string;
  category: string;
  type: string;
}

interface CollectionCardProps {
  product: Product;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        {!imageError ? (
          <img
            src={isHovered ? product.backImage : product.frontImage}
            alt={`${product.name} ${isHovered ? 'back' : 'front'}`}
            className="w-full h-full object-cover transition-all duration-500"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">
                  {product.category === 'jersey' ? '👕' :
                   product.category === 'vest' ? '🦺' :
                   product.category === 'jacket' ? '🧥' : '🧥'}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{product.name}</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
          {product.type}
        </div>
        
        {/* View Toggle Indicator */}
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isHovered ? 'Back' : 'Front'}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default Collections;