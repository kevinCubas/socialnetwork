import { motion } from "framer-motion";

export function ModalAnimate({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      className=" w-full m-auto flex justify-center items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { ease: "easeIn", duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
}