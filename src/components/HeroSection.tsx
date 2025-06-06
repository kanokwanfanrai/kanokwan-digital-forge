
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'AI Content Creator & Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      aria-label="หน้าแรก - แนะนำตัว Kanokwan Fanrai"
    >
      <div 
        className="absolute inset-0 opacity-50" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />
      
      <header className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Kanokwan
          </h1>
          <div 
            className="text-xl md:text-2xl text-green-400 font-mono h-8"
            aria-live="polite"
            aria-label={`อาชีพ: ${displayText}`}
          >
            {displayText}
            <span className="animate-pulse" aria-hidden="true">|</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          สอน AI และ Coding มาแล้ว 10 ปี พร้อมแชร์ความรู้เกี่ยวกับเทคโนโลยี AI
          ผ่าน YouTube และ Facebook
        </p>
        
        <nav className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="เรียนรู้เพิ่มเติมเกี่ยวกับ Kanokwan"
          >
            เรียนรู้เพิ่มเติม
          </button>
          <button 
            onClick={() => window.open('http://www.youtube.com/@kanokwanfanrai2338', '_blank', 'noopener,noreferrer')}
            className="px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="เปิดช่อง YouTube ของ Kanokwan Fanrai ในแท็บใหม่"
          >
            ดู YouTube
          </button>
        </nav>
      </header>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-green-400 hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
        aria-label="เลื่อนลงไปยังส่วนเกี่ยวกับ Kanokwan"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
