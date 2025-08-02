import React from 'react';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="mt-2 md:mt-4 glass-card animate-bounce-in mx-2 sm:mx-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 p-4 sm:p-8 flex items-center justify-center lg:rounded-l-3xl rounded-t-3xl lg:rounded-t-none">
          <div className="relative">
            <img 
              src={product.imageSrc} 
              alt={product.altText} 
              className="w-full max-w-sm sm:max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-space text-white mb-3 sm:mb-4">{product.title}</h3>
          <div className="flex flex-wrap items-baseline mb-4 sm:mb-6 gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-gradient">₹{product.price}</span>
            <span className="text-base sm:text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
            <span className="bg-gradient-to-r from-neon-green to-neon-cyan text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full animate-pulse">{product.discount}</span>
          </div>
          
          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {product.features.map((feature, index) => {
              const gradients = [
                'from-neon-purple to-neon-pink',
                'from-neon-pink to-neon-cyan',
                'from-neon-cyan to-neon-purple',
                'from-neon-green to-neon-pink'
              ];
              const gradientClass = gradients[index % gradients.length];
              
              return (
                <li key={index} className="flex items-center group">
                  <div className={`w-2 h-2 bg-gradient-to-r ${gradientClass} rounded-full mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                  <span className="text-sm sm:text-base text-gray-300 font-sora">{feature}</span>
                </li>
              );
            })}
          </ul>

          <a 
            href={product.bookingUrl} 
            className="glow-button inline-block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan hover:from-neon-pink hover:via-neon-cyan hover:to-neon-purple text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold font-space transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-neon-purple/50 text-center animate-glow w-full sm:w-auto"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;