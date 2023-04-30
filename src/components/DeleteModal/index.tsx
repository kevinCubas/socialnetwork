import { useSelector } from "react-redux";
import { closeDeleteModal, selectModalState } from "../../redux/Features/modalSlice";
import { useDeletePostMutation } from "../../redux/Features/postsSlice";

import { Modal } from "../Modal";
import { CancelBtn } from "../CancelBtn";
import { ModalAnimate } from "../ModalAnimate";

import { handleAddToast } from "../../util/handleAddToast";
import { dispatchAction } from "../../util/dispatchAction";

type postIdType = number | null

export function DeleteModal() {
  const { isDeleteOpen, postId } = useSelector(selectModalState);

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: postIdType) => {
    try {
      if (!postId) throw new Error("No post match");
      if (postId === id) await deletePost(postId);
    } catch (error: unknown) {
      if (error instanceof Error) (
        handleAddToast({ message: error.message, type: "error" })
      );
    } finally {
      dispatchAction(closeDeleteModal())
    }
  }

  const handleCloseDeleteModal = () => {
    dispatchAction(closeDeleteModal())
  }

  return (
      <Modal isOpen={isDeleteOpen} closeModal={handleCloseDeleteModal}>
        <ModalAnimate>
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
        </ModalAnimate>
      </Modal>
  )
}