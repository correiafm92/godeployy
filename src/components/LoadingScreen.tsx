
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [visible, setVisible] = useState(true);
  const [textOpacity, setTextOpacity] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  // Pulse text effect
  useEffect(() => {
    let pulseInterval: NodeJS.Timeout;
    
    if (visible && !fadeOut) {
      pulseInterval = setInterval(() => {
        setTextOpacity(prev => prev === 1 ? 0.6 : 1);
      }, 1500);
    }
    
    return () => {
      clearInterval(pulseInterval);
    };
  }, [visible, fadeOut]);

  // Loading timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // After fade out animation completes
      setTimeout(() => {
        setVisible(false);
        onLoadingComplete();
      }, 800);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-wine-dark transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-64 h-64 mb-8">
        <img 
          src="https://i.postimg.cc/DwxYtLXF/file-00000000fcc061f7bbed89e2654c7845-conversation-id-67fc3453-6ff4-8004-bd39-bb44e0f3f81f-message-i.png" 
          alt="Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <p 
        className="text-white text-2xl font-poppins font-light tracking-wider transition-opacity duration-1000 ease-in-out"
        style={{ opacity: textOpacity }}
      >
        Só um momento
      </p>
    </div>
  );
};

export default LoadingScreen;
