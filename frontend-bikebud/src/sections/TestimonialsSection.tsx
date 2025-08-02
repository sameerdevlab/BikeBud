import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      rating: 5,
      testimonial: "Game changer for my daily commute! No more juggling plastic bags while riding. The reflective strips are a bonus for safety.",
      name: "Rahul Kumar",
      location: "Bangalore",
      initials: "RK",
      gradientFrom: "from-neon-purple",
      gradientTo: "to-neon-pink",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-purple/5 hover:to-transparent",
      animationDelay: "0s",
      starDelay: 0
    },
    {
      rating: 5,
      testimonial: "Super easy to install and remove. Quality is excellent and it's completely waterproof. Worth every penny!",
      name: "Priya Sharma",
      location: "Mumbai",
      initials: "PS",
      gradientFrom: "from-neon-pink",
      gradientTo: "to-neon-cyan",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-pink/5 hover:to-transparent",
      animationDelay: "0.1s",
      starDelay: 0.5
    },
    {
      rating: 5,
      testimonial: "Perfect for grocery runs and office commutes. Fits perfectly on my bike and looks premium too. Highly recommended!",
      name: "Arjun Singh",
      location: "Delhi",
      initials: "AS",
      gradientFrom: "from-neon-cyan",
      gradientTo: "to-neon-green",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-cyan/5 hover:to-transparent",
      animationDelay: "0.2s",
      starDelay: 1
    }
  ];

  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-space text-white mb-3 sm:mb-4 px-2">
            What Our <span className="text-gradient">Riders</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-sora px-4">Join thousands of satisfied customers who trust BikeBud</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              location={testimonial.location}
              initials={testimonial.initials}
              gradientFrom={testimonial.gradientFrom}
              gradientTo={testimonial.gradientTo}
              hoverGradient={testimonial.hoverGradient}
              animationDelay={testimonial.animationDelay}
              starDelay={testimonial.starDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;