import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";


interface IToastIConType {
  type: "success" | "error" | "info";
}

export const ToasIcon = ({type}: IToastIConType) => {
  if (type === "success") {
    return <FaCheckCircle className="text-green" />
  }
  if (type === "info") {
    return <FaInfoCircle className="text-blue" />
  }
  return <FaTimesCircle className="text-red" />
}