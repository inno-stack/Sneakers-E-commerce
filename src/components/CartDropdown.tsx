import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";

interface CartDropdownProps {
  cart: ReturnType<typeof useCart>["cart"];
}

// Shopping cart dropdown component that matches the design specifications
export const CartDropdown = ({ cart }: CartDropdownProps) => {
  const { removeFromCart } = useCart();

  if (!cart.isOpen) return null;

  return (
    <div className="absolute right-0 top-12 w-96 max-w-sm z-50 cart-dropdown">
      <Card className="p-6 shadow-xl border border-gray-200 bg-white rounded-lg">
        {/* Cart header */}
        <h3 className="font-bold text-lg mb-6 pb-4 border-b border-gray-200">
          Cart
        </h3>

        {cart.items.length === 0 ? (
          // Empty cart state - matches the design
          <div className="py-16">
            <p className="text-gray-500 text-center font-medium">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <>
            {/* Cart items - matches the filled cart design */}
            <div className="space-y-4 mb-6">
              {cart.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  {/* Product thumbnail */}
                  <img
                    src={item.product.images[0].thumbnail}
                    alt={item.product.images[0].alt}
                    className="w-12 h-12 object-cover rounded"
                  />

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {item.product.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>${item.product.price.toFixed(2)}</span>
                      <span>×</span>
                      <span>{item.quantity}</span>
                      <span className="font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1 rounded"
                    aria-label={`Remove ${item.product.name} from cart`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Checkout button - matches the orange design */}
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors duration-200 shadow-sm">
              Checkout
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};
