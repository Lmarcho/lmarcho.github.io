import { FaLinkedin, FaSkype, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Brand */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              <span className="text-magento-orange">L</span>Marcho
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg mb-6">{personal.tagline}</p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-magento-orange transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={social.skype}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-magento-orange transition-all duration-300 transform hover:scale-110"
              aria-label="Skype"
            >
              <FaSkype className="text-xl" />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-magento-orange transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-magento-orange transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-center">
            <p className="flex items-center justify-center">
              Copyright © {currentYear} LMarcho. Made with{' '}
              <FaHeart className="text-magento-orange mx-1" /> by Lakshitha
            </p>
            <p className="mt-2 text-sm">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
