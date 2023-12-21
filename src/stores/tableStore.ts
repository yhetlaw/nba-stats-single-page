import { create } from "zustand";

type Props = {
  selectedRow: string | null;
  setSelectedRow: (value: string | null) => void;
};

export const useTableStore = create<Props>()((set) => ({
  selectedRow: null,
  setSelectedRow: (selectedRow: string | null) => set({ selectedRow }),
}));
