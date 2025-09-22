import { create } from "zustand";

const useGlobalStore = create((set) => ({
  results: [],
  hasSearched: false, 
  keywords: [],
  loading: false, 
  sidebar: false,

  // actions
  setSidebar: (value) => set({ sidebar: value }),
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  setLoading: (loading) => set({ loading }),
  setKeywords: (newKeywords) => set({ keywords: newKeywords }),
  setResults: (newResults) =>
    set({ results: newResults, hasSearched: true }),
}));

export default useGlobalStore;
