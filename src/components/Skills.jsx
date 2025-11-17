import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getCategoryColor = (category) => {
    const colors = {
      'eCommerce': 'from-orange-500 to-red-500',
      'Backend': 'from-blue-500 to-indigo-500',
      'Frontend': 'from-green-500 to-teal-500',
      'Database': 'from-purple-500 to-pink-500',
      'API': 'from-yellow-500 to-orange-500',
      'Cloud': 'from-cyan-500 to-blue-500',
      'Cache': 'from-red-500 to-pink-500',
      'Search': 'from-indigo-500 to-purple-500',
      'Tools': 'from-gray-500 to-gray-700',
      'DevOps': 'from-teal-500 to-green-500',
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-magento-orange">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-magento-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise in modern web technologies and eCommerce platforms
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(category)} mr-3`}></span>
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm font-medium text-magento-orange">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
