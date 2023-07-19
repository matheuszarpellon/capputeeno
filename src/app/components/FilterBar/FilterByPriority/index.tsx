import { useState } from "react";
import { ArrowIcon } from "../../Icons/arrowIcon";
import { Container, PriorityFilter } from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { FilterPriority } from "@/types/filters";

interface FilterByPriorityProps {

}
export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleUpdatePriority = (value: FilterPriority) => {
    setPriority(value)
    handleToggle()
  }

  return (
    <Container>
      <button onClick={handleToggle}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && 
      <PriorityFilter>
        <li onClick={() => handleUpdatePriority(FilterPriority.NEWS)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.BIGGEST_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.MINOR_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.POPULARITY)}>Mais vendidos</li>
      </PriorityFilter>
      }
    </Container>
  )
}