"use client"
import { FilterByPriority } from "./FilterByPriority"
import { FilterByType } from "./FilterByType"
import { FilterContainer } from "./styles"

interface FilterBarProps {

}
export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}