"use client"
import { useFilter } from "@/hooks/useFilter";
import { FilterItem, FilterList } from "./styles";
import { FilterType } from "@/types/filters";

export interface FilterItemProps {
  isSelected?: boolean;
}


export function FilterByType() {
  const { type, setType } = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList>
      <FilterItem isSelected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os produtos</FilterItem>
      <FilterItem isSelected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>Camisetas</FilterItem>
      <FilterItem isSelected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Canecas</FilterItem>
    </FilterList>
  )
}