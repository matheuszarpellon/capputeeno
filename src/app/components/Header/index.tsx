import { useFilter } from "@/hooks/useFilter";
import { Input } from "../Input";
import { Cart } from "./cart";
import { Container, Logo } from "./styles";
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

}

export function Header(props: HeaderProps) {
  const {search, setSearch} = useFilter()

  return (
    <Container>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <Input value={search} handleChange={setSearch} placeholder="Procurando por algo?" />
        <Cart />
      </div>
    </Container>
  )
}