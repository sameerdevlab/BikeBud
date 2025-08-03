import ProductCard from '../components/ProductCard';
import type {Product} from '../types/Product';

const HeroSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'BikeBud ONE-FIT',
      price: 699,
      originalPrice: 899,
      discount: '22% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Universal fit for all bike models (splendor, glamor, shine, unicorn, and similar tanks)',
      ],
      bookingUrl: 'https://forms.gle/gWG9WWMhCrtxpcCh6'
    },
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'BikeBud RE-BASE',
      price: 799,
      originalPrice: 999,
      discount: '20% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Fit for Royal Enfield bike models',
      ],
      bookingUrl: 'https://forms.gle/8QQYhQSHZGi3Uojr8'
    },
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'BikeBud RE-PRIME',
      price: 1199,
      originalPrice: 1499,
      discount: '20% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Fit for Royal Enfield bike models',
      ],
      bookingUrl: 'https://forms.gle/6FAH5ymnoXUPV8Vj6'
    },
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'BikeBud RE-ELITE',
      price: 1499,
      originalPrice: 1999,
      discount: '25% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Fit for Royal Enfield bike models',
      ],
      bookingUrl: 'https://forms.gle/DqAy1TAqbHzsvShMA'
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white py-20 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-neon-pink/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 m-2">
        <div className="text-center animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black font-space mb-4 sm:mb-6 leading-tight px-2">
            No More Handle <span className="text-gradient animate-glow">Plastic Bags</span>.
            Use the Tank Like a <span className="text-gradient animate-glow">Trunk</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto font-sora animate-slide-up px-4" style={{animationDelay: '0.3s'}}>
            Make daily grocery trips easier with futuristic design.
          </p>
        </div>

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
    </section>
  );
};

export default HeroSection;