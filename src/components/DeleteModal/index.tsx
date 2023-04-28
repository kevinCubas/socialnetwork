import { useDispatch, useSelector } from "react-redux";
import { closeDeleteModal, selectEditModal } from "../../redux/Features/modalSlice";
import { Modal } from "../Modal";
import { useDeletePostMutation } from "../../redux/Features/postsSlice";

type postIdType = number | null

export function DeleteModal() {
  const { isDeleteOpen, postId } = useSelector(selectEditModal);
  const dispatch = useDispatch()

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: postIdType) => {
    try {
      if(!postId) return;
      if(postId === id) await deletePost(postId);
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(closeDeleteModal())
    }
  }

  const handleCloseDeleteModal = () => {
    dispatch(closeDeleteModal())
  }

  return (
    <Modal isOpen={isDeleteOpen} closeModal={handleCloseDeleteModal}>
      <div className="w-[41.25rem] flex flex-col p-6 bg-white rounded-2xl border border-gray-400 gap-y-10">
        <p 
          className="text-left text-[22px] font-bold min-[340px]:text-base"
        >
          Are you sure you want to delete this item?
        </p>
        <div className="ml-auto flex gap-4 font-bold max-[340px]:flex-col">
          <button 
            className="border border-gray-400 px-8 py-[6px] rounded-lg"
            onClick={handleCloseDeleteModal}>Cancel</button>
          <button 
            className="bg-red text-white px-8 py-[6px] rounded-lg"
            onClick={() => handleDeletePost(postId)}>Delete</button>
        </div>
      </div>
    </Modal>
  )
}