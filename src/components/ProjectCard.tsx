
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  url: string;
  delay: number;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, url, delay, index }) => {
  return (
    <motion.div
      className={`project-card flex-shrink-0 w-80 h-48 md:w-96 md:h-64 m-2 rounded-lg overflow-hidden relative stagger-${index}`}
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
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
        <img 
          src={image} 
          alt="Project" 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
