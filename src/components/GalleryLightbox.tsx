"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/images/truck 2.jpg", className: "col-span-2 row-span-2" },
    { src: "/images/boat 1.jpg", className: "" },
    { src: "/images/truck 3.jpg", className: "" },
    { src: "/images/gtgruck 4 small.jpg", className: "col-span-2" },
    { src: "/images/before-after-1.jpg", className: "" },
    { src: "/images/boat 2.jpg", className: "" },
    { src: "/images/boat 3.jpg", className: "col-span-2" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`${img.className} rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors duration-300 cursor-pointer group`}
            onClick={() => openLightbox(idx)}
          >
            <img 
              src={img.src} 
              alt="Gallery image" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-slate-900/50 rounded-full"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Arrow */}
          <button 
            className="absolute left-4 md:left-12 text-white/70 hover:text-white transition-colors z-50 p-4"
            onClick={prevImage}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 40 0 20 20 0"></polyline>
            </svg>
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] p-4 flex items-center justify-center">
            <img 
              src={images[currentImageIndex].src} 
              alt="Gallery Image Full" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Next Arrow */}
          <button 
            className="absolute right-4 md:right-12 text-white/70 hover:text-white transition-colors z-50 p-4"
            onClick={nextImage}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 0 24 20 4 40"></polyline>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
