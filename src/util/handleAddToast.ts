import { addToast, removeToast } from "../redux/Features/toastSlice";
import { store } from "../redux/store";

type Toast = {
  message: string;
  type: IToastType;
}

export const handleAddToast = (content: Toast) => {
  const toastToAdd = {
    id: Math.random() * Date.now(),
    message: content.message,
    type: content.type
  }
  store.dispatch(addToast(toastToAdd));

  setTimeout(() => {
    store.dispatch(removeToast(toastToAdd.id));
  }, 5000);
};