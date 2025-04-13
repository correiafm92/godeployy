
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "https://i.postimg.cc/kGNTwbm0/1744304042982.png",
    url: "https://outliers-one.vercel.app"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/6QDzX05s/488615861-1762715454658814-7112080195564576109-n.jpg",
    url: "https://movvihome.vercel.app"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "https://example.com/project3"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "https://example.com/project4"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "https://example.com/project5"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "https://example.com/project6"
  }
];

const ProjectsCarousel: React.FC = () => {
  return (
    <div className="w-full py-10">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projetos
      </motion.h2>
      
      <div className="relative">
        <div className="carousel-container flex overflow-x-auto py-4 px-4 md:px-10 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <div key={project.id} className="snap-center">
              <ProjectCard 
                image={project.image} 
                url={project.url} 
                delay={0.1 * index}
                index={index + 1}
              />
            </div>
          ))}
        </div>
        
        <motion.div 
          className="absolute bottom-4 right-4 text-white"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Hand className="w-6 h-6 animate-tap" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
