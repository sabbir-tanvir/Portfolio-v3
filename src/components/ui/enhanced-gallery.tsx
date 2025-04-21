"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Grid, Maximize, Minimize } from "lucide-react";

interface EnhancedGalleryProps {
  images: string[];
  title?: string;
  onClose?: () => void;
}

export function EnhancedGallery({ 
  images, 
  title,
  onClose 
}: EnhancedGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Scroll thumbnail into view when changing images
  useEffect(() => {
    if (scrollRef.current) {
      const thumbnailWidth = 100; // Width of each thumbnail + gap
      scrollRef.current.scrollTo({
        left: currentIndex * thumbnailWidth - (scrollRef.current.clientWidth / 2) + (thumbnailWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);
  
  const navigateNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigatePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        switch (e.key) {
          case "ArrowLeft":
            navigatePrev();
            break;
          case "ArrowRight":
            navigateNext();
            break;
          case "Escape":
            setLightboxOpen(false);
            break;
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex, images.length]);
  
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const toggleLightbox = (index?: number) => {
    if (index !== undefined) {
      setCurrentIndex(index);
    }
    setLightboxOpen(!lightboxOpen);
  };

  return (
    <div className="relative w-full">
      {/* Main gallery view */}
      <div className="relative mb-8 rounded-md overflow-hidden">
        {/* View toggle button */}
        <button 
          onClick={() => setIsGridView(!isGridView)} 
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 z-10 rounded-full text-white"
          aria-label="Toggle view"
        >
          {isGridView ? <Maximize size={20} /> : <Grid size={20} />}
        </button>
        
        <LayoutGroup>
          {isGridView ? (
            // Grid view layout
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-md bg-card/50" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {images.map((image, index) => (
                <motion.div
                  layout
                  key={index}
                  className="relative aspect-video cursor-pointer overflow-hidden rounded-md border border-border"
                  onClick={() => toggleLightbox(index)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-start">
                    <span className="p-3 text-sm font-medium text-white">
                      {`${index + 1}/${images.length}`}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Main image slider view
            <motion.div 
              layout 
              className="relative aspect-video bg-card/50 rounded-md overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video w-full cursor-pointer"
                  onClick={() => toggleLightbox()}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              
              <button
                onClick={navigatePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white z-10 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={navigateNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white z-10 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 right-4 px-3 py-2 rounded-full bg-black/50 text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </LayoutGroup>
      </div>
      
      {/* Thumbnails row */}
      <div 
        className="flex gap-3 overflow-x-auto pb-2 px-1 -mx-1 snap-x scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 cursor-pointer relative w-24 h-16 snap-center rounded-md overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex ? "ring-2 ring-primary border-transparent" : "border-border hover:border-primary/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="100px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => toggleLightbox()}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLightbox();
              }}
              className="absolute top-4 right-4 p-2 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            {/* Image counter */}
            <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-black/50 text-white text-sm">
              {currentIndex + 1} / {images.length}
              {title && <span className="ml-2 font-medium">- {title}</span>}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePrev();
              }}
              className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateNext();
              }}
              className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Main image container */}
            <motion.div
              key={`lightbox-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-7xl max-h-full">
                <Image
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}