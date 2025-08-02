import type { FC } from 'react';

interface FeatureCardProps {
  icon: FC<any>;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  hoverGradient: string;
  animationDelay?: string;
  floatDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  hoverGradient,
  animationDelay = '0s',
  floatDelay = '0s'
}) => {
  return (
    <div 
      className={`glass-card card-tilt p-6 text-center scroll-reveal ${hoverGradient} transition-all duration-500`}
      style={{ animationDelay }}
    >
      <div 
        className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center mx-auto mb-4 animate-float`}
        style={{ animationDelay: floatDelay }}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold font-space text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-sora">{description}</p>
    </div>
  );
};

export default FeatureCard;