import { removeAllToasts } from "../redux/Features/toastSlice";
import { store } from "../redux/store";

export const removeAllToastsFromStore = () => {
  store.dispatch(removeAllToasts());
}