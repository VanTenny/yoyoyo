
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageDescription: string;
  darkMode: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageDescription,
  darkMode
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-4xl max-h-[90vh] w-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
        {/* Header */}
        <div className={`flex justify-between items-center p-4 ${darkMode ? 'text-white' : 'text-white'}`}>
          <div>
            <h3 className="text-xl font-bold">{imageTitle}</h3>
            <p className="text-sm opacity-80">{imageDescription}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="p-4">
          <img
            src={imageSrc}
            alt={imageTitle}
            className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
