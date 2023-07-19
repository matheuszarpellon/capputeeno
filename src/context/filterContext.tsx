"use client"
import { FilterPriority, FilterType } from "@/types/filters";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: FilterPriority.NEWS,
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value: FilterType) => { },
  setPriority: (value: FilterPriority) => { }
})

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(FilterPriority.POPULARITY);

  return (
    <FilterContext.Provider value={{ search, setSearch, page, setPage, type, setType, priority, setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}