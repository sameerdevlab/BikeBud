import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  testimonial: string;
  name: string;
  location: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  hoverGradient: string;
  animationDelay?: string;
  starDelay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  testimonial,
  name,
  location,
  initials,
  gradientFrom,
  gradientTo,
  hoverGradient,
  animationDelay = '0s',
  starDelay = 0
}) => {
  return (
    <div 
      className={`glass-card card-tilt p-4 sm:p-8 scroll-reveal ${hoverGradient} transition-all duration-500 mx-2 sm:mx-0`}
      style={{ animationDelay }}
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
            style={{ animationDelay: `${i * 0.1 + starDelay}s` }} 
          />
        ))}
      </div>
      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 italic font-sora">"{testimonial}"</p>
      <div className="flex items-center">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center mr-3 sm:mr-4`}>
          <span className="text-sm sm:text-base text-white font-bold font-space">{initials}</span>
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold font-space text-white">{name}</h4>
          <p className="text-gray-400 text-sm font-sora">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;