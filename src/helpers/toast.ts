import toast from "react-hot-toast";

export const succesToastify = (message: string) =>
  toast.success(message, {
    duration: 5000,
  });

export const errorToastify = (message: string) =>
  toast.error(message);

