import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/91XXXXXXXXXX" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 glow-button bg-gradient-to-r from-neon-green to-green-600 hover:from-green-600 hover:to-neon-green text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-neon-green/50 transform hover:scale-110 transition-all duration-500 z-50 flex items-center gap-1 sm:gap-2 animate-bounce-in"
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: '1s' }}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="font-space font-semibold text-sm sm:text-base hidden xs:inline">Chat on WhatsApp</span>
      <span className="font-space font-semibold text-sm sm:text-base xs:hidden">Chat</span>
    </a>
  );
};

export default WhatsAppButton;