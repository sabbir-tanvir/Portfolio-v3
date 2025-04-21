"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronRight, ChevronLeft, Share2 } from "lucide-react";

interface CarouselGalleryProps {
  images: string[];
  title?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function CarouselGallery({ 
  images, 
  title,
  autoplay = false,
  autoplaySpeed = 5000
}: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [showControls, setShowControls] = useState(true);
  
  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && !isZoomed) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoplaySpeed);
    }
    
    return () => interval && clearInterval(interval);
  }, [isPlaying, isZoomed, images.length, autoplaySpeed]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          navigatePrev();
          break;
        case "ArrowRight":
          navigateNext();
          break;
        case "Escape":
          if (isZoomed) setIsZoomed(false);
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isZoomed]);
  
  // Handle mouse movement for zoom positioning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate position as percentage of container
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setZoomPosition({ x, y });
  };
  
  const navigateNext = () => {
    if (isZoomed) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigatePrev = () => {
    if (isZoomed) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    // Pause autoplay when zoomed
    if (!isZoomed) setIsPlaying(false);
  };
  
  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const shareImage = () => {
    if (navigator.share) {
      navigator.share({
        title: title || "Project Image",
        text: "Check out this project screenshot",
        url: images[currentIndex]
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Copy to clipboard as fallback
      navigator.clipboard.writeText(images[currentIndex]);
      alert("Image URL copied to clipboard!");
    }
  };
  
  // Hide controls after inactivity
  useEffect(() => {
    if (showControls) {
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [showControls]);
  
  return (
    <div 
      className="relative rounded-xl overflow-hidden border border-border bg-black/5 dark:bg-white/5 aspect-[16/9] w-full max-w-6xl mx-auto mb-10"
      onMouseMove={() => setShowControls(true)}
      onTouchStart={() => setShowControls(true)}
    >
      {/* Carousel slides */}
      <div 
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className={`relative w-full h-full cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
              onClick={toggleZoom}
            >
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className={`
                  object-contain transition-transform duration-300
                  ${isZoomed ? 'scale-[2.5]' : 'scale-100'}
                `}
                style={
                  isZoomed 
                    ? {
                        transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                      }
                    : {}
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Caption and title */}
      <div className={`
        absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent
        transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-lg font-medium">{title}</p>
            <p className="text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          
          {/* Control buttons */}
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
              className="p-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full text-white transition-colors"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleAutoplay();
              }}
              className={`p-2 backdrop-blur-sm rounded-full text-white transition-colors ${
                isPlaying ? 'bg-primary/80 hover:bg-primary' : 'bg-black/40 hover:bg-black/60'
              }`}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                  <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                </svg>
              )}
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                shareImage();
              }}
              className="p-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full text-white transition-colors"
              aria-label="Share image"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigatePrev();
        }}
        className={`
          absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
          bg-black/30 hover:bg-black/60 text-white transition-colors
          ${showControls ? 'opacity-100' : 'opacity-0'} ${isZoomed ? 'hidden' : 'block'}
        `}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateNext();
        }}
        className={`
          absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
          bg-black/30 hover:bg-black/60 text-white transition-colors
          ${showControls ? 'opacity-100' : 'opacity-0'} ${isZoomed ? 'hidden' : 'block'}
        `}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Thumbnails navigation */}
      <div className={`
        absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 
        ${showControls ? 'opacity-100' : 'opacity-0'} ${isZoomed ? 'hidden' : 'flex'}
      `}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}