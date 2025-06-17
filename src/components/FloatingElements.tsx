// src/components/FloatingElements.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ 
  count = 6, 
  className = '' 
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    const generateElements = (): FloatingElement[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 100,
        speed: Math.random() * 20 + 10,
        opacity: Math.random() * 0.1 + 0.05,
        delay: Math.random() * 2,
      }));
    };

    setElements(generateElements());
  }, [count]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animationDuration: `${element.speed}s`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rotate-45 animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/40 rounded-full animate-ping" 
           style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-pink-400/25 rotate-12 animate-spin" 
           style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 right-32 w-2 h-8 bg-gradient-to-t from-purple-400/20 to-transparent animate-pulse" 
           style={{ animationDuration: '2s' }} />
      
      {/* Particle trails */}
      <div className="absolute top-1/3 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-float"
           style={{ animationDuration: '8s' }} />
      <div className="absolute top-2/3 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-float"
           style={{ animationDuration: '12s', animationDelay: '2s' }} />
    </div>
  );
}