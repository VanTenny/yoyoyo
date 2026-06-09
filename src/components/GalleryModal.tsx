import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
  darkMode: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose, darkMode }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleDownload = async () => {
    try {
      const res = await fetch(image.src, { mode: 'cors' });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const ext = (blob.type.split('/')[1] || 'jpg').split(';')[0];
      a.download = `${image.title || 'photo'}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in new tab if blob download is blocked
      window.open(image.src, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-w-6xl w-full max-h-[95vh] flex flex-col">
        <div className="flex justify-between items-start mb-3 text-white">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight">{image.title}</h3>
            {image.description && (
              <p className="text-sm opacity-70 mt-1 font-light">{image.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono uppercase tracking-wider transition-colors"
              aria-label="Download photo"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
