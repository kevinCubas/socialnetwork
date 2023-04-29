import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/Features/authUserSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { openDeleteModal, openEditModal } from "../../redux/Features/modalSlice";
import { getTimeDifference } from "../../util/getTimeDifference";

interface IPostProps {
  data: IPost
}
export function Post({ data }: IPostProps) {
  const { user } = useSelector(selectAuthUser)
  const dispatch = useDispatch()
  const { title, content, username, created_datetime, id } = data
  const timeDifference = getTimeDifference(new Date(created_datetime))

  const handleOpenDeleteModal = (id: number) => {
    dispatch(openDeleteModal(id))
  }

  const handleOpenEditModal = (post: IPost) => {
    dispatch(openEditModal(post))
  }
  return (
    <>
      <article
        className="border border-gray-400 rounded-2xl min-w-full overflow-hidden h-fit">
        <header className="flex justify-between w-full p-6 bg-blue text-white font-bold text-xl">
          <h3>{title}</h3>
          {user === username && (
            <div className="flex gap-7">
              <button
                title="Delete"
                type="button"
                aria-label="Delete"
                onClick={() => handleOpenDeleteModal(id)}>
                <FaTrashAlt />
              </button>
              <button
                title="Edit"
                type="button"
                aria-label="Edit"
                onClick={() => handleOpenEditModal(data)}>
                <FaEdit />
              </button>
            </div>
          )}
        </header>
        <div className="flex flex-col p-6 gap-4">
          <div className="flex justify-between text-gray-500">
            <p className="font-bold">@{username}</p>
            <span>{timeDifference}</span>
          </div>
          <div className="">
            <p>{content}</p>
          </div>
        </div>
      </article>
    </>
  )
}