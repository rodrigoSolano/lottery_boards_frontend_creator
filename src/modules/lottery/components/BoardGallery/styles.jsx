import { styled, Box } from "@mui/material";

const BoardGalleryWrapper = styled(Box)({
  gap: "16px",
  height: "100%",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden",
});

const BoardGalleryContainer = styled(Box)(({ theme }) => ({
  gap: "16px",
  display: "grid",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  },
}));

export { BoardGalleryWrapper, BoardGalleryContainer };
