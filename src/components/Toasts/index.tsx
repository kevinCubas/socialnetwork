import { useDispatch, useSelector } from "react-redux";
import { removeToast, selectToasts } from "../../redux/Features/toastSlice";
import { ToasIcon } from "./ToastIcon";
import { ToastProgress } from "./ToastProgress";

export function Toasts() {
  const { toasts } = useSelector(selectToasts);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => dispatch(removeToast(id));

  return (
    <div className="fixed top-10 right-6 flex flex-col gap-4">
      {toasts.map((toast) => {
        return (
          <div key={toast.id} role="alert" className="bg-white border border-gray-500 rounded-2xl relative overflow-hidden">
            <div className="flex gap-1 p-4 items-center w-48">
              <div className="flex items-center gap-2">
                <ToasIcon type={toast.type} />
                <div className="border-l border-gray-500 px-1 text-sm ">
                  <p>{toast.message}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="close"
                title="close"
                onClick={() => handleRemove(toast.id)}
                className="absolute top-auto right-2 
                text-sm text-center rounded-full 
                px-2 py-1 
                hover:bg-gray-300 
                hover:duration-200
                ease-in-out
                transition"
              >
                X
              </button>
            </div>
            <ToastProgress type={toast.type} />
          </div>
        )
      }
      )}
    </div>
  )
}