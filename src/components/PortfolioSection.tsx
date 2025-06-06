
import React from 'react';
import { ExternalLink, Youtube, Facebook, Globe } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'YouTube Channel',
      name: 'Kanokwan Fanrai',
      description: 'ช่อง YouTube เกี่ยวกับ AI และ Coding พร้อมเนื้อหาการสอนที่เข้าใจง่าย',
      icon: Youtube,
      link: 'http://www.youtube.com/@kanokwanfanrai2338',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      title: 'Facebook Page',
      name: 'Kanokwan Fanrai',
      description: 'เพจ Facebook แชร์ความรู้และข่าวสารเกี่ยวกับ AI อัพเดทล่าสุด',
      icon: Facebook,
      link: 'https://www.facebook.com/kanokwan.fanrai',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      title: 'Website',
      name: 'Kanokwan.com',
      description: 'เว็บไซต์หลักที่รวบรวมเนื้อหาเกี่ยวกับ AI และ Coding ทั้งหมด',
      icon: Globe,
      link: '#',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ผลงาน <span className="text-green-400">ของเรา</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            แพลตฟอร์มต่างๆ ที่เราแชร์ความรู้และสร้างเนื้อหาเกี่ยวกับ AI และเทคโนโลยี
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 ${project.color} rounded-lg ${project.hoverColor} transition-colors duration-300`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="p-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <h4 className="text-green-400 font-semibold mb-3">{project.name}</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <button
                onClick={() => window.open(project.link, '_blank')}
                className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300 group-hover:bg-green-400"
              >
                เยี่ยมชม
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ติดตามเพื่อไม่พลาดอัพเดท
            </h3>
            <p className="text-gray-300 mb-6">
              เนื้อหาใหม่ๆ เกี่ยวกับ AI, Machine Learning, และเทคโนโลยีล้ำสมัย
              จะมีการอัพเดทสม่ำเสมอในทุกแพลตฟอร์ม
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.open('http://www.youtube.com/@kanokwanfanrai2338', '_blank')}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <Youtube size={20} />
                <span>YouTube</span>
              </button>
              <button
                onClick={() => window.open('https://www.facebook.com/kanokwan.fanrai', '_blank')}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
