import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Counter({
  quantity = 1,
  minQuantity = 1,
  maxQuantity = 10000,
  onIncrease = () => {},
  onDecrease = () => {},
}) {
  const handleIncrease = () => {
    if (quantity === maxQuantity) return;
    onIncrease();
  };

  const handleDecrease = () => {
    if (quantity === minQuantity) return;

    onDecrease();
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
      <IconButton onClick={handleDecrease}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1">{quantity}</Typography>
      <IconButton onClick={handleIncrease}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
