import { useDispatch, useSelector } from "react-redux";
import { closeDeleteModal, selectModalState } from "../../redux/Features/modalSlice";
import { Modal } from "../Modal";
import { useDeletePostMutation } from "../../redux/Features/postsSlice";
import { CancelBtn } from "../CancelBtn";
import { handleAddToast } from "../../util/handleAddToast";

type postIdType = number | null

export function DeleteModal() {
  const { isDeleteOpen, postId } = useSelector(selectModalState);
  const dispatch = useDispatch()

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: postIdType) => {
    try {
      if(!postId) throw new Error("No post match");
      if(postId === id) await deletePost(postId);
    } catch (error: unknown) {
      if(error instanceof Error) (
        handleAddToast({ message: error.message, type: "error" })
      );
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
          <CancelBtn handleCancel={handleCloseDeleteModal} />
          <button 
            className="bg-red text-white px-8 py-[6px] rounded-lg"
            onClick={() => handleDeletePost(postId)}>Delete</button>
        </div>
      </div>
    </Modal>
  )
}