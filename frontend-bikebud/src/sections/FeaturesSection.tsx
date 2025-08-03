import { Shield, Zap, Droplets, Weight } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Easy to Attach/Detach",
      description: "Quick-release system lets you mount and remove in seconds",
      gradientFrom: "from-neon-purple",
      gradientTo: "to-neon-pink",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-purple/10 hover:to-transparent",
      animationDelay: "0s",
      floatDelay: "0s"
    },
    {
      icon: Shield,
      title: "Reflective Strip",
      description: "High-visibility strips keep you safe during night rides",
      gradientFrom: "from-neon-pink",
      gradientTo: "to-neon-cyan",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-pink/10 hover:to-transparent",
      animationDelay: "0.1s",
      floatDelay: "1s"
    },
    {
      icon: Droplets,
      title: "Water-Resistant",
      description: "Weatherproof design resists water",
      gradientFrom: "from-neon-cyan",
      gradientTo: "to-neon-green",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-cyan/10 hover:to-transparent",
      animationDelay: "0.2s",
      floatDelay: "2s"
    },
    {
      icon: Weight,
      title: "Lightweight but Spacious",
      description: "Maximum storage capacity with minimal weight impact",
      gradientFrom: "from-neon-green",
      gradientTo: "to-neon-purple",
      hoverGradient: "hover:bg-gradient-to-br hover:from-neon-green/10 hover:to-transparent",
      animationDelay: "0.3s",
      floatDelay: "3s"
    }
  ];

  return (
    <section id="features" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-space text-white mb-3 sm:mb-4 px-2">
            Why Choose <span className="text-gradient">BikeBud</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-sora px-4">Designed for modern riders who need reliable storage on the go</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
              hoverGradient={feature.hoverGradient}
              animationDelay={feature.animationDelay}
              floatDelay={feature.floatDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;