import { handlePrice } from "@/utils/formatPrice";
import { Card } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;

}
export function ProductCard({ image, title, price }: ProductCardProps) {

  const formattedPrice = handlePrice(price)

  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{formattedPrice}</p>
      </div>
    </Card>
  )
}