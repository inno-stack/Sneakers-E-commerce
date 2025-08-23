import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { useCart } from "@/hooks/useCart";
import { mockProduct } from "@/data/productData";

// Main application component
function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    closeCart,
  } = useCart();

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        cart.isOpen &&
        !target.closest(".cart-dropdown") &&
        !target.closest("[data-cart-button]")
      ) {
        closeCart();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cart.isOpen, closeCart]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with navigation and cart */}
      <Header
        cart={cart}
        onToggleCart={toggleCart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Gallery */}
          <div className="order-1">
            <ProductGallery images={mockProduct.images} />
          </div>

          {/* Product Details */}
          <div className="order-2">
            <ProductDetails product={mockProduct} onAddToCart={addToCart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
