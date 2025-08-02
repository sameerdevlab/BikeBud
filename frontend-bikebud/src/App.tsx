import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WhatsAppButton from './components/WhatsappButton';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useEffect(() => {
    // Always apply dark mode class to document
    document.documentElement.classList.add('dark');
  }, []);

  // Initialize scroll reveal functionality
  useScrollReveal();

  return (
    <div className="min-h-screen transition-colors duration-500 dark">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 animated-gradient"></div>
      
      <Navbar />
      <HomePage />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;