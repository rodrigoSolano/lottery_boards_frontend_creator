import { CDN_URL } from "libs/config";

export default function lotteryAdapter(rawLottery) {
  return {
    id: rawLottery.id,
    cards: rawLottery.cards.map((rawCard) => ({
      id: rawCard.id,
      name: rawCard.name,
      image: `${CDN_URL}/${rawCard.image}`,
    })),
    boards: rawLottery.boards.map((rawBoard) => ({
      id: rawBoard.id,
      cards: rawBoard.cards.map((rawCard) => ({
        id: rawCard.id,
        name: rawCard.name,
        image: `${CDN_URL}/${rawCard.image}`,
      })),
    })),
    numberOfBoards: rawLottery.numberOfBoards,
  };
}
