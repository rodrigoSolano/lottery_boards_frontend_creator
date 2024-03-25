import { useState } from "react";

import createLotteryService from "modules/lottery/services/create-lottery/create-lottery.service";

export default function useLotteryCreator() {
  const [isLoading, setIsLoading] = useState(false);

  async function createLottery(variables) {
    setIsLoading(true);
    try {
      const lottery = await createLotteryService(variables);

      return lottery;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    createLottery,
  };
}
