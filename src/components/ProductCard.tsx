import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  frontImage: string;
  backImage: string;
  price: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
                  {product.category === 'sports' ? '👕' : '🧥'}
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
          {product.category === 'sports' ? 'Sports Jersey' : 'Hoodie'}
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
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-200 text-sm ml-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;