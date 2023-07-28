import { create } from "zustand";

interface ShoeStoreProps {
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (id: string) => void;
}

export const useShoeStore = create<ShoeStoreProps>((set) => ({
  cartItems: [],
  addToCart: (cartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
  removeFromCart: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.productId !== id),
    })),
}));
