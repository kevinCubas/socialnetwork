interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ children, isOpen, closeModal }: IModalProps) {
  if (!isOpen) return null;

  // To close modal on click outside of modal
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "modal" && e.currentTarget === e.target) closeModal();
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