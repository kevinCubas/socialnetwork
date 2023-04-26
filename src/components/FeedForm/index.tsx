import { useState } from "react";

export function FeedForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitDisabled = !title || !content;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (submitDisabled) throw new Error("Fields are empty");
      console.log(title, content);
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
      className="flex flex-col gap-6 p-6 w-full border border-gray-400 rounded-2xl">
      <header><h2 className="font-bold text-base">What’s on your mind?</h2></header>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
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
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content">Content:</label>
          <textarea
            name="content textarea"
            id="content"
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
        </div>
        <button
          className="bg-blue 
              text-white text-base font-bold 
              rounded-lg 
              px-[1.875rem] py-[0.375rem] 
              ml-auto mt-2
              hover:brightness-90
              hover:duration-200
              ease-in-out
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed"
          type="submit"
          disabled={submitDisabled}
          title="Create"
        >
          Create
        </button>
      </div>
    </form>
  )
}