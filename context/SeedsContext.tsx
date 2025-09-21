import { SEEDS as initialSeeds } from "@/constants/Seeds";
import { Seeds } from "@/entities/seeds.entities";
import React, { createContext, ReactNode, useContext, useState } from "react";

type SeedsContextType = {
  seeds: Seeds[];
  addSeed: (seed: Seeds) => void;
  removeSeed: (id: number) => void;
  updateSeed: (updatedSeed: Seeds) => void;
};

const SeedsContext = createContext<SeedsContextType | undefined>(undefined);

export const SeedsProvider = ({ children }: { children: ReactNode }) => {
  const [seeds, setSeeds] = useState<Seeds[]>(initialSeeds);

  const addSeed = (seed: Seeds) => setSeeds(prev => [...prev, seed]);
  const removeSeed = (id: number) =>
    setSeeds(prev => prev.filter(seed => seed.id !== id));
  const updateSeed = (updatedSeed: Seeds) =>
    setSeeds(prev =>
      prev.map(seed => (seed.id === updatedSeed.id ? updatedSeed : seed))
    );

  return (
    <SeedsContext.Provider value={{ seeds, addSeed, removeSeed, updateSeed }}>
      {children}
    </SeedsContext.Provider>
  );
};

export const useSeeds = () => {
  const context = useContext(SeedsContext);
  if (!context) throw new Error("useSeeds must be used within SeedsProvider");
  return context;
};
