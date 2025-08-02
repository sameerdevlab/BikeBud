import ProductCard from '../components/ProductCard';
import type {Product} from '../types/Product';

const HeroSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'Reflective Tank Bag',
      price: 599,
      originalPrice: 899,
      discount: '33% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Universal fit for all bike models',
        '15L storage capacity'
      ],
      bookingUrl: 'https://forms.google.com'
    },
    {
      id: 'reflective-tank-bag',
      imageSrc: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
      altText: 'Reflective Tank Bag',
      title: 'Reflective Tank Bag',
      price: 599,
      originalPrice: 899,
      discount: '33% OFF',
      features: [
        'Premium water-resistant material',
        '360° reflective safety strips',
        'Universal fit for all bike models',
        '15L storage capacity'
      ],
      bookingUrl: 'https://forms.google.com'
    }
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 m-2">
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