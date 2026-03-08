import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detectamos si el elemento bajo el mouse es un botón o link
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON';
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isHovering ? 'scale(1.3)' : 'scale(1)'}`,
      }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        className={`${isHovering ? 'text-fuchsia-400' : 'text-fuchsia-600'} drop-shadow-lg transition-colors duration-200`}
      >
        {/* Barra 1: Se estira en hover */}
        <rect x="3" y={isHovering ? "8" : "12"} width="4" height={isHovering ? "13" : "9"} fill="currentColor" opacity="0.6" className="transition-all" />
        {/* Barra 2: La central */}
        <rect x="10" y={isHovering ? "4" : "7"} width="4" height={isHovering ? "17" : "14"} fill="currentColor" opacity="0.8" className="transition-all" />
        {/* Barra 3: La más alta */}
        <rect x="17" y={isHovering ? "1" : "3"} width="4" height={isHovering ? "20" : "18"} fill="currentColor" className="transition-all" />
      </svg>
      
      {/* Opcional: Un puntito pequeño para precisión al hacer click */}
      {isHovering && (
        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-ping" />
      )}
    </div>
  );
};

export default CustomCursor;