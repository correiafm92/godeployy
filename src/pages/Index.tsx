
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import LoadingScreen from '@/components/LoadingScreen';
import { motion } from 'framer-motion';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };
  
  // Prevent scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <motion.div 
        className="min-h-screen bg-gradient-to-b from-wine-dark to-wine-light text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <Header />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ProjectsCarousel />
          </motion.div>
          
          <motion.footer
            className="py-12 text-center text-white text-opacity-70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="max-w-xl mx-auto">
              <p className="mb-4">
                Somos especialistas em transformar ideias em aplicativos de alto desempenho.
                Entre em contato para começar seu projeto.
              </p>
              <p>© 2025 Apps Go Deploy. Todos os direitos reservados.</p>
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
