
import React from 'react';
import { Facebook, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ติดต่อ <span className="text-green-400">เรา</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            สนใจสอบถามเกี่ยวกับการเรียน AI หรือต้องการคำปรึกษา สามารถติดต่อเราได้
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Facebook size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Facebook Page</h3>
                  <p className="text-gray-300">Kanokwan Fanrai</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                ช่องทางหลักในการติดต่อและสอบถามข้อมูล พร้อมตอบคำถามเกี่ยวกับ AI
              </p>
              <button
                onClick={() => window.open('https://www.facebook.com/kanokwan.fanrai', '_blank')}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                ติดต่อทาง Facebook
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-center">
              <MessageCircle size={48} className="text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                พร้อมให้คำปรึกษา
              </h3>
              <p className="text-green-100">
                เกี่ยวกับการเรียนรู้ AI และการพัฒนาทักษะ Coding
              </p>
            </div>
          </div>

          <div className="bg-gray-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">ส่งข้อความหาเรา</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">ชื่อ</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="ชื่อของคุณ"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">อีเมล</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">ข้อความ</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="สอบถามหรือข้อความที่ต้องการสื่อสาร..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.facebook.com/kanokwan.fanrai', '_blank');
                }}
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 mb-4">
              © 2024 Kanokwan Fanrai. สงวนลิขสิทธิ์.
            </p>
            <p className="text-green-400 font-semibold">
              AI Content Creator & Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
