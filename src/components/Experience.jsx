import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-magento-orange">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-magento-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in Magento development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-magento-orange"></div>

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-magento-orange rounded-full items-center justify-center shadow-lg z-10">
                <FaBriefcase className="text-white text-xl" />
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 md:w-[calc(50%-2rem)]">
                <div className="flex items-center mb-4 md:hidden">
                  <div className="w-10 h-10 bg-magento-orange rounded-full flex items-center justify-center mr-4">
                    <FaBriefcase className="text-white" />
                  </div>
                  <span className="text-magento-orange font-semibold">{job.period}</span>
                </div>

                <span className="hidden md:inline-block text-magento-orange font-semibold mb-2">
                  {job.period}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <h4 className="text-lg font-semibold text-magento-orange mb-4">
                  {job.company}
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
