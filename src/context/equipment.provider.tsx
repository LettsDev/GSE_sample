import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { EquipmentInstanceInterface } from "../types";

interface EquipmentContextInterface {
  equipment: EquipmentInstanceInterface[];
}

const EquipmentContext = createContext<EquipmentContextInterface>(null!);

export function useEquipmentContext() {
  return useContext(EquipmentContext);
}

export function EquipmentProvider({ children }: { children: React.ReactNode }) {
  const { read } = useLocalStorage();
  function loadEquipmentFromLocalStorage() {
    const dataString = read("equipment_instance");

    return JSON.parse(dataString) as EquipmentInstanceInterface[];
  }

  const equipment = loadEquipmentFromLocalStorage();

  return (
    <EquipmentContext.Provider value={{ equipment }}>
      {children}
    </EquipmentContext.Provider>
  );
}
