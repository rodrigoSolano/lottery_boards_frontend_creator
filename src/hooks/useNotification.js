// @ts-check
import { useSnackbar } from "notistack";

const NOTIFICATION_TIME = 4000;

export default function useNotification() {
  const { enqueueSnackbar } = useSnackbar();

  /**
   * @param {string} message
   * @param {string} [variant]
   * @param {number} [duration] - notification duration in ms
   */
  const showNotification = (
    message,
    variant = "info",
    duration = NOTIFICATION_TIME
  ) => {
    // @ts-ignore
    enqueueSnackbar(message, { variant, autoHideDuration: duration });
  };

  /**
   * @param {Error} error
   * @returns {void}
   */
  const showError = (error) => {
    const errorMessage = error.message || "Unknown error";
    showNotification(errorMessage, "error");
  };

  /**
   * @param {string} message
   * @param {number} duration - notification duration in ms
   * @returns {void}
   */
  const showSuccess = (message, duration = NOTIFICATION_TIME) => {
    showNotification(message, "success", duration);
  };

  /**
   * @param {string} message
   * @returns {void}
   */
  const showWarning = (message) => {
    showNotification(message, "warning");
  };

  /**
   * @param {string} message
   * @returns {void}
   */
  const showInfo = (message) => {
    showNotification(message, "info");
  };

  return { showError, showSuccess, showWarning, showInfo };
}
