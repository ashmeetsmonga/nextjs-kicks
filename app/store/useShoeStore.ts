import { create } from "zustand";

interface ShoeStoreProps {
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
}

export const useShoeStore = create<ShoeStoreProps>((set) => ({
  cartItems: [],
  addToCart: (cartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
}));
