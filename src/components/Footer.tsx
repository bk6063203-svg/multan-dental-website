import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    // Dark Green background (matches your Navbar)
    <footer className="bg-[#005f40] text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding/Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Multan Dental</h2>
          <p className="text-sm mt-1 opacity-90">Providing quality dental care in Multan.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a 
            href="https://www.facebook.com/share/1C6aRSQAk1/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <FaFacebook size={32} />
          </a>
          <a 
            href="https://www.instagram.com/muxdental?utm_source=qr&igsh=MnRpemNtNHIxbGtw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <FaInstagram size={32} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm font-medium">
          © 2026 Multan Dental. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;