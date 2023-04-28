import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";
import { PostForm } from "../PostForm";
import { closeEditModal, selectModalState } from "../../redux/Features/modalSlice";
import { CancelBtn } from "../CancelBtn";

export function EditModal() {
  const { isEditOpen, post } = useSelector(selectModalState)
  const dispatch = useDispatch()
  if (!post) return null

  const handleCloseEditModal = () => {
    dispatch(closeEditModal())
  }

  return (
    <Modal isOpen={isEditOpen} closeModal={handleCloseEditModal}>
      <PostForm post={post} formTitle="Edit item">
        <CancelBtn handleCancel={handleCloseEditModal} />
      </PostForm>
    </Modal>
  )
}