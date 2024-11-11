import React from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  onRemove?: (index: number) => void;
}

export default function ImageGallery({ images, onRemove }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((url, index) => (
        <div key={url} className="relative group aspect-square">
          <img
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          {onRemove && (
            <button
              onClick={() => onRemove(index)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}