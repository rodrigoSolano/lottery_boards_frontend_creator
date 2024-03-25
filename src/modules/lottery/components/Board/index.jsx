import Card from "modules/lottery/components/Card";

import { BoardContainer } from "./styles";

export default function Board({ board, onClick = () => {} }) {
  return (
    <BoardContainer onClick={() => onClick(board)}>
      {board.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </BoardContainer>
  );
}
