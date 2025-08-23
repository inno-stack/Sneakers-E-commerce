import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/types";
import { ImageLightbox } from "./ImageLightbox";

interface ProductGalleryProps {
  images: ProductImage[];
}

// Product image gallery with thumbnails and lightbox functionality
export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Navigate to previous image
  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Navigate to next image
  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main product image */}
      <div className="relative group">
        <div
          className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={images[selectedImageIndex].url}
            alt={images[selectedImageIndex].alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation arrows - visible on hover */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white hover:bg-gray-100 rounded-full shadow-md"
          onClick={handlePrevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white hover:bg-gray-100 rounded-full shadow-md"
          onClick={handleNextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
              selectedImageIndex === index
                ? "ring-2 ring-orange-500 ring-offset-2 opacity-100"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={images}
        selectedIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onImageChange={setSelectedImageIndex}
      />
    </div>
  );
};
