import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    isDark: false,
    toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
    selectAnimal: "",
    selectCat: () => set((state) => ({ selectAnimal: "cat" })),
    selectDog: () => set((state) => ({ selectAnimal: "dog" })),
  })

const useStore = create(devtools(store));

export default useStore;