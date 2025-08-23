import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

// Product information and purchase controls
export const ProductDetails = ({
  product,
  onAddToCart,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(0);

  // Decrease quantity (minimum 0)
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <Card className="p-6 lg:p-8 space-y-6">
      {/* Company and product name */}
      <div className="space-y-2">
        <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
          {product.company}
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {product.name}
        </h1>
      </div>

      {/* Product description */}
      <p className="text-gray-600 leading-relaxed">{product.description}</p>

      {/* Pricing section */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Badge className="bg-black text-white font-bold px-2 py-1">
            {product.discount}%
          </Badge>
        </div>
        <p className="text-gray-500 line-through text-lg">
          ${product.originalPrice.toFixed(2)}
        </p>
      </div>

      {/* Quantity and Add to Cart section */}
      <div className="flex gap-4  space-y-4">
        {/* Quantity controls */}
        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-1 max-w-40">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            className="hover:bg-white rounded-md transition-colors duration-200"
            disabled={quantity === 0}
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4 text-orange-500" />
          </Button>

          <span className="font-bold text-lg min-w-[3ch] text-center">
            {quantity}
          </span>
        
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseQuantity}
            className="hover:bg-white rounded-md transition-colors duration-200"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4 text-orange-500" />
          </Button>
        </div>

        {/* Add to Cart button */}
        <Button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          className="w-40 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to cart
        </Button>
      </div>
    </Card>
  );
};
