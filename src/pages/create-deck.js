import { useEffect, useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

import useNotification from "hooks/useNotification";

import createDeckService from "modules/lottery/services/create-deck/create-deck.service";

const CreateDeck = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const { showSuccess, showError } = useNotification();

  const handleFileChange = (event) => {
    if (event.target.files.length === 54) {
      setImages(event.target.files);

      const filesArray = Array.from(event.target.files);
      const mappedFiles = filesArray.map((file) => URL.createObjectURL(file));
      setPreviews(mappedFiles);
    } else {
      showError("Debe seleccionar exactamente 54 cartas.");
      setImages([]);
      setPreviews([]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (images.length === 54) {
      try {
        await createDeckService({ name, images });

        showSuccess("Baraja creada correctamente");
      } catch (error) {
        showError("Error al crear la baraja");
      }
    } else {
      showError("Debe seleccionar exactamente 54 cartas antes de enviar.");
    }
  };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <Container maxWidth="md" component="form" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2} padding={2}>
        <TextField
          label="Nombre de la baraja"
          value={name}
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          type="file"
          variant="outlined"
          onChange={handleFileChange}
          inputProps={{ multiple: true, accept: "image/*" }}
          required
        />
        <Typography color="error">
          * Deben seleccionarse exactamente 54 cartas.
        </Typography>
        <Button type="submit" variant="contained" color="primary" size="large">
          Crear baraja
        </Button>
        {previews.length > 0 && (
          <Typography variant="h6">Previsualización</Typography>
        )}
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {previews.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="preview"
              style={{ width: "100px", height: "auto" }}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default CreateDeck;
