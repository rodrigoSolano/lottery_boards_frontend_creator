import { useState } from "react";

import useLottery from "modules/lottery/hooks/useLottery";

import Board from "modules/lottery/components/Board";
import BoardDetail from "modules/lottery/components/BoardDetail";

import { BoardGalleryContainer, BoardGalleryWrapper } from "./styles";

export default function BoardGallery({ lotteryId }) {
  const { lottery } = useLottery({ lotteryId });
  const [open, setOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleOpen = (board) => {
    setSelectedBoard(board);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBoard(null);
  };

  return (
    <BoardGalleryWrapper>
      <BoardGalleryContainer>
        {lottery &&
          lottery.boards.map((board) => (
            <Board key={board.id} board={board} onClick={handleOpen} />
          ))}
      </BoardGalleryContainer>
      {lottery && (
        <BoardDetail open={open} board={selectedBoard} onClose={handleClose} />
      )}
    </BoardGalleryWrapper>
  );
}
