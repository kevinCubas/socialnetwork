import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import { useGetPostsQuery } from "../../redux/Features/postsSlice";
import { selectModalState } from "../../redux/Features/modalSlice";

import { Post } from "../Post";
import { EditModal } from "../EditModal";
import { DeleteModal } from "../DeleteModal";
import { PostLoading } from "../LoadingPost";

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

  // Infinite scroll
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
    return <PostLoading />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <section className="flex flex-col w-full gap-6">
        {posts.map((post: IPost) => {
          return (
            <motion.div
              key={post.id}
              layout
            >
              <Post data={post} />
            </motion.div>
          )
        }
        )}
      </section>
      <div ref={referer}></div>
      {isDeleteOpen && createPortal(
        <DeleteModal />,
        document.body
      )}
      {isEditOpen && createPortal(
        <EditModal />,
        document.body
      )}
    </>
  )
}