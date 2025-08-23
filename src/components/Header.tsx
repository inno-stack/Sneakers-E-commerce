import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import avatarImage from "@/assets/image-avatar.png";
import { Button } from "@/components/ui/button";
import { CartDropdown } from "./CartDropdown";
import { MobileMenu } from "./MobileMenu";
import { useCart } from "@/hooks/useCart";

interface HeaderProps {
  cart: ReturnType<typeof useCart>["cart"];
  onToggleCart: () => void;
  onRemoveFromCart: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

// Main header component with navigation, cart, and mobile menu
export const Header = ({
  cart,
  onToggleCart,
  onRemoveFromCart,
  onUpdateQuantity,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button - only visible on mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-black">sneakers</h1>
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors duration-200 relative group"
                >
                  {item}
                  {/* Hover underline effect */}
                  <span className="absolute -bottom-8 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              ))}
            </nav>

            {/* Right side - Cart and Avatar */}
            <div className="flex items-center space-x-4">
              {/* Cart button with item counter */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggleCart}
                  className="relative hover:bg-gray-100 transition-colors duration-200"
                  data-cart-button
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-6 w-6 text-gray-700" />
                  {/* Cart item counter badge */}
                  {cart.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
                      {cart.itemCount}
                    </span>
                  )}
                </Button>

                {/* Cart dropdown */}
                <CartDropdown
                  cart={cart}
                  onRemoveFromCart={onRemoveFromCart}
                  onUpdateQuantity={onUpdateQuantity}
                />
              </div>

              {/* User avatar */}
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 transition-all duration-200">
                <img
                  src={avatarImage}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};
