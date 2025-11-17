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
      'eCommerce': 'bg-orange-100 text-orange-700 border-orange-300',
      'Backend': 'bg-blue-100 text-blue-700 border-blue-300',
      'Frontend': 'bg-green-100 text-green-700 border-green-300',
      'Architecture': 'bg-indigo-100 text-indigo-700 border-indigo-300',
      'API & Database': 'bg-purple-100 text-purple-700 border-purple-300',
      'Performance & Search': 'bg-red-100 text-red-700 border-red-300',
      'Cloud': 'bg-cyan-100 text-cyan-700 border-cyan-300',
      'Tools & DevOps': 'bg-teal-100 text-teal-700 border-teal-300',
      'Testing & Monitoring': 'bg-yellow-100 text-yellow-700 border-yellow-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-magento-orange">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-magento-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise in modern web technologies and eCommerce platforms
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(category)} hover:shadow-md transition-shadow duration-200`}
                    >
                      {skill.name}
                    </motion.span>
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
