
import React from 'react';
import { GraduationCap, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Clock, label: 'ประสบการณ์สอน', value: '10 ปี' },
    { icon: Users, label: 'ด้าน AI & Coding', value: 'เชี่ยวชาญ' },
    { icon: GraduationCap, label: 'การศึกษา', value: 'ระบบสารสนเทศ' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            เกี่ยวกับ <span className="text-green-400">Kanokwan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Content Creator ด้าน AI ที่มีประสบการณ์การสอนมากว่า 10 ปี 
            พร้อมแชร์ความรู้และเทคนิคใหม่ๆ ในโลกของ Artificial Intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">ประวัติและการศึกษา</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                เป็นคอนเทนครีเอเตอร์ด้าน AI ที่มีความเชี่ยวชาญในการสอนเทคโนโลยี 
                Artificial Intelligence และ Coding มากว่า 10 ปี
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">การศึกษา</h4>
                <p>ระบบสารสนเทศทางคอมพิวเตอร์</p>
                <p className="text-sm text-gray-400">มหาวิทยาลัยเทคโนโลยีราชมงคล</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{stat.value}</h4>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            พร้อมแชร์ความรู้ด้าน AI และ Coding
          </h3>
          <p className="text-green-100 mb-6">
            ติดตามเนื้อหาความรู้ใหม่ๆ และเทคนิคการใช้ AI ในชีวิตประจำวัน
          </p>
          <button 
            onClick={() => window.open('http://www.youtube.com/@kanokwanfanrai2338', '_blank')}
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            ดูช่อง YouTube
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
