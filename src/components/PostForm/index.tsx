import { useState } from "react";
import { useAddPostMutation } from "../../redux/Features/postsSlice";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/Features/authUserSlice";

interface IPostForm {
  formTitle?: string;
  post?: IPost;
  children?: React.ReactNode
}

export function PostForm({ formTitle, post, children }: IPostForm) {

  const { user } = useSelector(selectAuthUser);
  const [addNewPost] = useAddPostMutation()
  const [title, setTitle] = useState(post?.title ?? "");
  const [content, setContent] = useState(post?.content ?? "");

  const submitDisabled = !title || !content;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (submitDisabled) throw new Error("Fields are empty");
      await addNewPost({ username: user, title, content });
    } catch (error) {
      console.log(error)
    } finally {
      setTitle("");
      setContent("");
    }
  }
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.maxLength <= 50) {
      setTitle(e.target.value);
      return
    }
    setTitle(e.target.value.slice(0, 50));
    return
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.maxLength <= 750) {
      setContent(e.target.value);
      return
    }
    setContent(e.target.value.slice(0, 750));
    return
  }

  return (
    <form onSubmit={handleSubmit}
      className={`flex flex-col gap-6 
        p-6 ${post && "min-[1300px]:mx-72 min-[1140px]:mx-60 min-[1000px]:mx-40"} w-full 
        bg-white border border-gray-400 
        rounded-2xl`}
      >
      <header>
        <h2 className="font-bold text-base">
          {formTitle ? formTitle : "What’s on your mind?"}
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">Title:
          <input
            type="text"
            required
            aria-required="true"
            title="title input"
            value={title}
            onChange={handleTitleChange}
            maxLength={50}
            placeholder="Hello World"
            className="border border-gray-500 rounded-lg p-2"
          />
        </label>
        <label className="flex flex-col gap-2">Content:
          <textarea
            name="content textarea"
            required
            aria-required="true"
            title="content input"
            value={content}
            onChange={handleContentChange}
            maxLength={750}
            placeholder="Content Here"
            className="p-2 resize-none border border-gray-500 rounded-lg"
          >
          </textarea>
        </label>
        <div className="flex gap-4 ml-auto mt-2">
          {post && children}
          <button
            className={`${post ? "bg-green" : "bg-blue"} 
                text-white text-base font-bold 
                rounded-lg 
                px-[1.875rem] py-[0.375rem] 
                hover:brightness-90
                hover:duration-200
                ease-in-out
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed`}
            type="submit"
            disabled={submitDisabled}
            title="Create"
          >
            {post ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </form>
  )
}