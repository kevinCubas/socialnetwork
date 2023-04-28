import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "../../redux/Features/postsSlice";
import { Post } from "../Post";
import { DeleteModal } from "../DeleteModal";
import { createPortal } from "react-dom";
import { EditModal } from "../EditModal";
import { selectModalState } from "../../redux/Features/modalSlice";
import { useSelector } from "react-redux";

export function Posts() {
  const [amount, setAmount] = useState(10);
  const { data, isLoading, error } = useGetPostsQuery(amount, {
    refetchOnMountOrArgChange: true,
  });
  const { isDeleteOpen, isEditOpen } = useSelector(selectModalState);

  const posts = data?.results ?? [];
  const postsCount = data?.count ?? 10;
  const hasMore = postsCount > amount;

  const referer = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (referer.current) {
      observer.current = new IntersectionObserver((entries) => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting && hasMore) {
          setAmount((prev) => prev + 10);
        }
      });
      observer.current.observe(referer.current);
    } return () => {
      observer.current?.disconnect();
    }
  }, [hasMore])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <ul className="flex flex-col w-full gap-6">
        {posts.map((post: IPost) => {
          return (
            <li key={post.id}>
              <Post data={post} />
            </li>
          )
        }
        )}
      </ul>
      <div ref={referer}></div>
      { isDeleteOpen && createPortal(
        <DeleteModal />,
        document.body
      )}
      { isEditOpen && createPortal(
        <EditModal />,
        document.body
      )}
    </>
  )
}