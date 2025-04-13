
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  image: string;
  url: string;
  title: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Outliers",
    image: "https://i.postimg.cc/kGNTwbm0/1744304042982.png",
    url: "https://outliers-one.vercel.app"
  },
  {
    id: 2,
    title: "Movvi",
    image: "https://i.postimg.cc/6QDzX05s/488615861-1762715454658814-7112080195564576109-n.jpg",
    url: "https://movvihome.vercel.app"
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
        <div className="carousel-container flex justify-center flex-wrap gap-6 py-4 px-4 md:px-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-full md:w-auto"
            >
              <ProjectCard 
                image={project.image} 
                url={project.url} 
                delay={0.1 * index}
                index={index + 1}
                title={project.title}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="absolute bottom-4 right-4 text-white md:hidden"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Hand className="w-6 h-6 animate-tap" />
        </motion.div>
      </div>
      
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = "mailto:contato@appsdeployer.com"}
        >
          Criar o meu
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectsCarousel;
