import { Product } from "@/types";
import productMainImage1 from "@/assets/image-product-1.jpg";
import productThumb1 from "@/assets/image-product-1-thumbnail.jpg";
import productThumb2 from "@/assets/image-product-2.jpg";
import productThumb3 from "@/assets/image-product-3.jpg";
import productThumb4 from "@/assets/image-product-3-thumbnail.jpg";

// Mock product data - in a real app this would come from an APIimport { Product } from '@/types';

// Mock product data with different images for each view
export const mockProduct: Product = {
  id: "1",
  company: "SNEAKER COMPANY",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  originalPrice: 250.0,
  discount: 50,
  images: [
    {
      id: "1",
      url: productMainImage1,
      alt: "Fall Limited Edition Sneakers - Front view",
      thumbnail: productThumb1,
    },
    {
      id: "2",
      url: productThumb2,
      alt: "Fall Limited Edition Sneakers - Side view",
      thumbnail: productThumb2,
    },
    {
      id: "3",
      url: productThumb3,
      alt: "Fall Limited Edition Sneakers - Top view",
      thumbnail: productThumb3,
    },
    {
      id: "4",
      url: productThumb4,
      alt: "Fall Limited Edition Sneakers - Back view",
      thumbnail: productThumb4,
    },
  ],
};
