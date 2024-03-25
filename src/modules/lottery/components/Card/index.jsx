import { CardImage } from "./styles";

export default function Card({ card }) {
  return <CardImage src={card.image} alt={card.name} />;
}
