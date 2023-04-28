interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ children, isOpen, closeModal }: IModalProps) {
  if (!isOpen) return null;

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "modal") closeModal();
  }

  return (
    <div
      id="modal"
      onClick={handleCloseModal}
      className="fixed inset-0 m-auto w-full flex justify-center items-center bg-gray-500 bg-opacity-80"
    >
      {children}
    </div>
  )
}