import { IconButton, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Board from "modules/lottery/components/Board";

import { BoardDetailContainer } from "./styles";

export default function BoardDetail({ board, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <BoardDetailContainer>
        <Stack gap={2}>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <IconButton onClick={onClose} sx={{ padding: 0 }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Board board={board} />
        </Stack>
      </BoardDetailContainer>
    </Modal>
  );
}
