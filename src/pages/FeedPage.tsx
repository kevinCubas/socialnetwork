import { useEffect } from "react";
import { Feed } from "../components/Feed";
import { ProtectedFeedRoute } from "../components/ProtectedRoute";
import { motion } from "framer-motion";
import { removeAllToastsFromStore } from "../util/removeAllToast";

export default function FeedPage() {
  
  // remove toasts from store on the first render
  useEffect(() => {
   removeAllToastsFromStore();
  }, []);

  return (
    <ProtectedFeedRoute>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { ease: "easeIn", duration: 0.5 } }} exit={{ opacity: 0, y: -100 }}>
        <Feed />
      </motion.div>
    </ProtectedFeedRoute>
  )
}