// src/components/HeroSection.tsx
'use client';

import React from 'react';
import { AnimatedText } from './AnimatedText';
import { FloatingElements } from './FloatingElements';
import { CTAButton } from './CTAButton';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black ${className}`}>
      {/* Animated Background Elements */}
      <FloatingElements />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 font-heading tracking-tight">
            <span className="block">Building the Future with</span>
            <AnimatedText 
              words={['Agentic AI', 'Machine Learning', 'Generative AI']}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-heading"
            />
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
          Transforming ideas into intelligent solutions through cutting-edge AI technologies, 
          machine learning algorithms, and innovative generative AI systems.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <CTAButton 
            href="#projects" 
            variant="primary"
            className="group font-heading"
          >
            View My Work
            <svg 
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
          
          <CTAButton 
            href="#contact" 
            variant="secondary"
            className="group font-heading"
          >
            Let's Connect
            <svg 
              className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </CTAButton>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
    </section>
  );
}