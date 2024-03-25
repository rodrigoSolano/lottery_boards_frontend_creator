import Link from "next/link";
import { useState } from "react";
import {
  Box,
  Stack,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

import useNotification from "hooks/useNotification";

import BoardCreatorForm from "modules/lottery/components/BoardCreatorForm";
import BoardGallery from "modules/lottery/components/BoardGallery";

import useLotteryCreator from "modules/lottery/hooks/useLotteryCreator";

export default function HomePage() {
  const [lotteryId, setLotteryId] = useState(null);
  const { showSuccess, showError } = useNotification();
  const { createLottery, isLoading } = useLotteryCreator();

  const handleSubmit = async (variables) => {
    try {
      const createdLotteryId = await createLottery(variables);

      setLotteryId(createdLotteryId);

      showSuccess("Tableros generados correctamente.");
    } catch (error) {
      showError("Ocurrió un error al generar los tableros.");
    }
  };

  return (
    <Box bgcolor="#F5F5DC" minHeight="100vh">
      <Container maxWidth="xl">
        <Stack gap={4} padding={2}>
          <Stack>
            <Typography variant="h3" align="center" gutterBottom>
              Lotería Mexicana
            </Typography>
            <Box sx={{ width: "100%", height: "2px", bgcolor: "#000" }} />
          </Stack>
          <Stack direction="row" alignItems="center" gap={4}>
            <BoardCreatorForm onSubmit={handleSubmit} />
            <Typography variant="h6" align="center">
              o
            </Typography>
            <Link href="/create-deck">
              <Typography variant="h6" align="center">
                Crea una nueva baraja
              </Typography>
            </Link>
          </Stack>
          {isLoading && (
            <Stack justifyContent="center" alignItems="center">
              <CircularProgress />
            </Stack>
          )}
          {!isLoading && lotteryId && <BoardGallery lotteryId={lotteryId} />}
          {!isLoading && !lotteryId && (
            <Typography variant="h5" align="center">
              Aún no se han generado tableros.
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
