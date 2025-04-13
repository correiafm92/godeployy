
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  url: string;
  delay: number;
  index: number;
  title?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, url, delay, index, title }) => {
  return (
    <motion.div
      className={`project-card w-full md:w-96 h-64 md:h-72 rounded-xl overflow-hidden relative shadow-xl stagger-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300"></div>
        <img 
          src={image} 
          alt={title || "Project"} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {title && (
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-sm opacity-80">Ver projeto →</span>
          </div>
        )}
      </a>
    </motion.div>
  );
};

export default ProjectCard;
