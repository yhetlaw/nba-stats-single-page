import { create } from "zustand";

type Props = {
  selectedMatchId?: number | null;
  setSelectedMatchId: (value?: number | null) => void;
  selectedTeamId: number | null;
  setSelectedTeamId: (value: number | null) => void;
};

export const useMatchStore = create<Props>()((set) => ({
  selectedMatchId: null,
  setSelectedMatchId: (selectedMatchId?: number | null) =>
    set({ selectedMatchId }),
  selectedTeamId: null,
  setSelectedTeamId: (selectedTeamId: number | null) => set({ selectedTeamId }),
}));
