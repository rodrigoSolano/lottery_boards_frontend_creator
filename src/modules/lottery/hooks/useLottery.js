import { useEffect, useState } from "react";

import findLotteryByIdService from "modules/lottery/services/find-lottery-by-id/find-lottery-by-id.service";

export default function useLottery({ lotteryId }) {
  const [lottery, setLottery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function findLotteryById(id) {
    setIsLoading(true);
    try {
      const response = await findLotteryByIdService({ id });

      setLottery(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!lotteryId) return;

    findLotteryById(lotteryId);
  }, [lotteryId]);

  return {
    lottery,
    isLoading,
  };
}
