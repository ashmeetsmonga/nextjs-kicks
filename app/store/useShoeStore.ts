import { create } from "zustand";

interface ShoeStoreProps {
  shoesList: Shoe[];
  setShoesList: (list: Shoe[]) => void;
}

const getShoesList = async () => {
  const data: Shoe[] = await fetch("./shoes-data.json").then((data) =>
    data.json(),
  );
  return data;
};

export const useShoeStore = create<ShoeStoreProps>((set) => ({
  shoesList: [],
  setShoesList: (list: Shoe[]) => set({ shoesList: list }),
}));
