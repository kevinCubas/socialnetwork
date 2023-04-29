interface IToastProps {
  type: IToastType;
}

export function ToastProgress({type}: IToastProps) {
  const bgColorType = type === "success" ? "bg-green" : type === "info" ? "bg-blue" : "bg-red";
  return (
    <div className="h-1">
      <div className={`h-1 ${bgColorType} animate-progress`}></div>
    </div>
  )
}