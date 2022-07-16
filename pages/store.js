import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    isDark: false,
    toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
  })

const useStore = create(devtools(store));

export default useStore;