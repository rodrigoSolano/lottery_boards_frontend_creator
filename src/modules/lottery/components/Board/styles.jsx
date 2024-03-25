import { Box, styled } from "@mui/material";

const BoardContainer = styled(Box)({
  border: "1px solid #000",
  backgroundColor: "transparent",

  display: "grid",
  maxWidth: "100%",
  gridTemplateColumns: "repeat(4, 1fr)",
});

export { BoardContainer };
