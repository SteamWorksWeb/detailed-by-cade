"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface InteractiveSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function InteractiveSlider({ beforeImage, afterImage }: InteractiveSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Clean) - Full width background */}
      <img
        src={afterImage}
        alt="After cleaning"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Before Image (Dirty) - Clipped by slider position */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before cleaning"
          className="absolute inset-0 w-[100vw] max-w-none h-full object-cover object-center pointer-events-none"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] pointer-events-none flex items-center justify-center z-10"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full flex items-center justify-center shadow-[0_0_20px_-2px_rgba(96,165,250,0.6)] border-2 border-white">
          <div className="flex space-x-1.5">
            <svg width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9L1 5L5 1" stroke="#0b0f19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="#0b0f19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-6 left-6 bg-slate-950/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700/50 text-xs font-bold text-white tracking-widest uppercase shadow-lg">
        Before
      </div>
      <div className="absolute top-6 right-6 bg-slate-950/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700/50 text-xs font-bold text-white tracking-widest uppercase shadow-lg">
        After
      </div>
    </div>
  );
}
