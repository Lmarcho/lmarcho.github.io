import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  return (
    <section id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      <ParticlesBackground id="contact-particles" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-magento-orange">Info</span>
          </h2>
          <div className="w-24 h-1 bg-magento-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next Magento project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-750 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-magento-orange rounded-full mb-6">
              <FaPhone className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
            <div className="space-y-2">
              {personal.phone.map((phone, index) => (
                <p key={index} className="text-gray-300">
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-magento-orange transition-colors">
                    {phone}
                  </a>
                </p>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-750 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-magento-orange rounded-full mb-6">
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
            <p className="text-gray-300">
              <a href={`mailto:${personal.email}`} className="hover:text-magento-orange transition-colors break-all">
                {personal.email}
              </a>
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-750 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-magento-orange rounded-full mb-6">
              <FaMapMarkerAlt className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
            <p className="text-gray-300">{personal.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
