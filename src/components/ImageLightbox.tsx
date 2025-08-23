import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductImage } from "@/types";

interface ImageLightboxProps {
  images: ProductImage[];
  selectedIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

// Full-screen image lightbox modal
export const ImageLightbox = ({
  images,
  selectedIndex,
  isOpen,
  onClose,
  onImageChange,
}: ImageLightboxProps) => {
  // Navigate to previous image
  const handlePrevious = () => {
    onImageChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  // Navigate to next image
  const handleNext = () => {
    onImageChange(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-white hover:bg-gray-100 rounded-full shadow-md"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Main image */}
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            {/* Navigation arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full shadow-md"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full shadow-md"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => onImageChange(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  selectedIndex === index
                    ? "ring-2 ring-orange-500 ring-offset-2 opacity-100"
                    : "opacity-60 hover:opacity-100"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};
