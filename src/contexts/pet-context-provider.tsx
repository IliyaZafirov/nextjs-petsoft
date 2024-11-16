"use client";

import { Pet } from "@/lib/types";
import { createContext, useState } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetConext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetConext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
