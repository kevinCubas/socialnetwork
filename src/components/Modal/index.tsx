interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal ({ children, isOpen, closeModal }: IModalProps) {
  if(!isOpen) return null;

  return (
    <div 
      onClick={closeModal}
      className="fixed inset-0 m-auto w-full flex justify-center items-center bg-gray-500 bg-opacity-80"
    >
      {children}
    </div>
  )
}