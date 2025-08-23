import { useState, useCallback } from "react";
import { CartState, CartItem, Product } from "@/types";

// Custom hook for managing shopping cart state and operations
export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    isOpen: false,
    total: 0,
    itemCount: 0,
  });

  // Calculate total price and item count whenever cart changes
  const updateCartTotals = useCallback((items: CartItem[]) => {
    const total = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { total, itemCount };
  }, []);

  // Add item to cart or update quantity if item already exists
  const addToCart = useCallback(
    (product: Product, quantity: number) => {
      setCart((prevCart) => {
        const existingItem = prevCart.items.find(
          (item) => item.product.id === product.id
        );
        let newItems: CartItem[];

        if (existingItem) {
          // Update quantity of existing item
          newItems = prevCart.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // Add new item to cart
          newItems = [...prevCart.items, { id: product.id, product, quantity }];
        }

        const { total, itemCount } = updateCartTotals(newItems);

        return {
          ...prevCart,
          items: newItems,
          total,
          itemCount,
        };
      });
    },
    [updateCartTotals]
  );

  // Remove item completely from cart
  const removeFromCart = useCallback(
    (productId: string) => {
      setCart((prevCart) => {
        const newItems = prevCart.items.filter(
          (item) => item.product.id !== productId
        );
        const { total, itemCount } = updateCartTotals(newItems);

        return {
          ...prevCart,
          items: newItems,
          total,
          itemCount,
        };
      });
    },
    [updateCartTotals]
  );

  // Toggle cart dropdown visibility
  const toggleCart = useCallback(() => {
    setCart((prevCart) => ({ ...prevCart, isOpen: !prevCart.isOpen }));
  }, []);

  // Close cart dropdown
  const closeCart = useCallback(() => {
    setCart((prevCart) => ({ ...prevCart, isOpen: false }));
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    toggleCart,
    closeCart,
  };
};
