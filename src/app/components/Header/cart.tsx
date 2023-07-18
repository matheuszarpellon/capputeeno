import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartIcon } from "../Icons/cartIcon"
import { CartContainer, CartCount } from "./styles"

interface CartProps {

}
export function Cart(props: CartProps) {
  const { value } = useLocalStorage('cart-items')


  return (
    <CartContainer>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </CartContainer>
  )
}