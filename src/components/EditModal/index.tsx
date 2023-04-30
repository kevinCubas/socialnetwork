import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";
import { PostForm } from "../PostForm";
import { closeEditModal, selectModalState } from "../../redux/Features/modalSlice";
import { CancelBtn } from "../CancelBtn";
import { ModalAnimate } from "../ModalAnimate";

export function EditModal() {
  const { isEditOpen, post } = useSelector(selectModalState)
  const dispatch = useDispatch()
  if (!post) return null

  const handleCloseEditModal = () => {
    dispatch(closeEditModal())
  }

  return (
    <Modal isOpen={isEditOpen} closeModal={handleCloseEditModal}>
      <ModalAnimate>
        <PostForm post={post} formTitle="Edit item">
          <CancelBtn handleCancel={handleCloseEditModal} />
        </PostForm>
      </ModalAnimate>
    </Modal>
  )
}