
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex flex-col items-center sm:items-start space-y-2 mb-4 sm:mb-0">
            <a href="https://youtu.be/vihx2ZPvw0M?si=YpUdk4e71wlEiFh-" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              AI Masterclass Level 1
            </a>
            <a href="https://youtu.be/rkIU6R6hPwE?si=BN4YpuWFlVeTzSOZ" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              AI Masterclass Level 2 (n8n)
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-end space-y-2">
            <a href="https://www.skool.com/learn-automation/about" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              AI + Automation Community
            </a>
            <a href="https://www.solomonchrist.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              Solomon Christ Website
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100">
          <p>&copy; {new Date().getFullYear()} Solomon Christ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
