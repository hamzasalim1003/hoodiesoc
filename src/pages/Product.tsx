import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [personalizationText, setPersonalizationText] = useState('');
  const [language, setLanguage] = useState('english');

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "ISOC Hoodies",
    description: "Premium quality hoodie featuring beautiful Islamic Society designs with Arabic calligraphy",
    price: "£25.99",
    frontImage: "/WhatsApp Image 2025-09-10 at 20.29.03_26f58a5f.jpg",
    backImage: "/WhatsApp Image 2025-09-10 at 20.29.03_d97fb64c.jpg",
    colors: ['black', 'navy', 'maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: [
      "100% premium cotton blend",
      "Soft-touch printing",
      "Reinforced seams",
      "Machine washable",
      "Free personalization"
    ]
  };

  const [currentImage, setCurrentImage] = useState(product.frontImage);

  const handleOrderNow = () => {
    const orderDetails = {
      product: product.name,
      size: selectedSize,
      color: selectedColor,
      personalization: personalizationText,
      language: language
    };
    
    // In a real app, this would redirect to a proper order form
    const whatsappMessage = `Hi! I'd like to order: ${product.name} (Size: ${selectedSize}, Color: ${selectedColor})${personalizationText ? `, Personalization: ${personalizationText} (${language})` : ''}`;
    const whatsappUrl = `https://wa.me/447346094301?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-900">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setCurrentImage(product.frontImage)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  currentImage === product.frontImage ? 'border-yellow-400' : 'border-gray-600'
                }`}
              >
                <img
                  src={product.frontImage}
                  alt="Front view"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setCurrentImage(product.backImage)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  currentImage === product.backImage ? 'border-yellow-400' : 'border-gray-600'
                }`}
              >
                <img
                  src={product.backImage}
                  alt="Back view"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-yellow-400">
                  {product.price}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(47 reviews)</span>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-white font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-yellow-400 scale-110' : 'border-gray-600'
                    }`}
                    style={{
                      backgroundColor: color === 'black' ? '#000' : 
                                     color === 'navy' ? '#1e293b' : 
                                     color === 'maroon' ? '#7f1d1d' : color
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-white font-medium mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-yellow-400 bg-yellow-400 text-black'
                        : 'border-gray-600 text-white hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Personalization */}
            <div>
              <h3 className="text-white font-medium mb-3">Free Personalization</h3>
              <div className="space-y-3">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                  <option value="punjabi">Punjabi</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter name for personalization (optional)"
                  value={personalizationText}
                  onChange={(e) => setPersonalizationText(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderNow}
              className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Order Now</span>
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg">
                <Truck className="text-yellow-400" size={20} />
                <div>
                  <p className="text-white text-sm font-medium">Fast Delivery</p>
                  <p className="text-gray-400 text-xs">48-72 hour turnaround</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg">
                <Shield className="text-yellow-400" size={20} />
                <div>
                  <p className="text-white text-sm font-medium">Quality Guarantee</p>
                  <p className="text-gray-400 text-xs">100% satisfaction</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-medium mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;