import { Paper, styled } from "@mui/material";

const BoardDetailContainer = styled(Paper)(({ theme }) => ({
  width: "90vw",
  height: "auto",
  bgcolor: "white",
  padding: theme.spacing(2),

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  [theme.breakpoints.up("sm")]: {
    width: "70vw",
  },

  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
}));

export { BoardDetailContainer };
