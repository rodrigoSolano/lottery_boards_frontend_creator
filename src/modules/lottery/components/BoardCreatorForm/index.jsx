import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import Counter from "modules/lottery/components/Counter";

import useDecks from "modules/lottery/hooks/useDecks";

export default function BoardCreatorForm({ onSubmit }) {
  const { decks, isLoading } = useDecks();
  const [selectedDeck, setSelectedDeck] = useState("");
  const [numberOfBoards, setNumberOfBoards] = useState(1);

  const handleIncreaseNumberOfBoards = () =>
    setNumberOfBoards(numberOfBoards + 1);

  const handleDecreaseNumberOfBoards = () =>
    setNumberOfBoards(numberOfBoards - 1);

  const handleChange = (e) => {
    setSelectedDeck(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ numberOfBoards, deckId: selectedDeck });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" flexWrap={{ xs: "wrap", md: "nowrap" }} gap={6}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Selecciona una baraja</InputLabel>
          <Select
            label="Selecciona una baraja"
            value={selectedDeck}
            onChange={handleChange}
            required
          >
            {!isLoading &&
              decks?.map((deck) => (
                <MenuItem key={deck.id} value={deck.id}>
                  {deck.name}
                </MenuItem>
              ))}
            {!isLoading && decks.length === 0 && (
              <MenuItem disabled>No hay barajas disponibles</MenuItem>
            )}
          </Select>
        </FormControl>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="body1" fontWeight={700}>
            Número de tableros
          </Typography>
          <Counter
            quantity={numberOfBoards}
            onIncrease={handleIncreaseNumberOfBoards}
            onDecrease={handleDecreaseNumberOfBoards}
          />
        </Stack>
        <Button variant="contained" size="medium" type="submit">
          <Typography variant="body1" textTransform="none">
            Generar tableros
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
