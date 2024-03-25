import { useEffect, useState } from "react";

import listDecksService from "../services/list-decks/list-decks.service";

export default function useDecks() {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const listDecks = async () => {
    setIsLoading(true);
    try {
      const decks = await listDecksService({ options: "" });

      setDecks(decks);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    listDecks();
  }, []);

  return { decks, isLoading };
}
