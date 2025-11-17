import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-20 bg-gray-900 overflow-hidden">
      <ParticlesBackground id="projects-particles" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent <span className="text-magento-orange">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-magento-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing enterprise-level Magento 2 eCommerce solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-magento-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-magento-orange transition-colors">
                  {project.title}
                </h3>

                {/* Description - expands on hover */}
                <div className="mb-4 overflow-hidden transition-all duration-500">
                  <p className="text-gray-300 group-hover:line-clamp-none line-clamp-3 transition-all duration-500">
                    {project.description}
                  </p>
                </div>

                {/* Technologies - shows all on hover */}
                <div className="flex flex-wrap gap-2 mb-4 transition-all duration-500">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full transition-all duration-300 ${
                        techIndex >= 4 ? 'opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-10' : 'opacity-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-magento-orange hover:text-orange-400 font-semibold transition-colors mt-auto"
                >
                  View Project
                  <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
