import { Feed } from "../components/Feed";
import { ProtectedFeedRoute } from "../components/ProtectedRoute";
import { motion } from "framer-motion";

export default function FeedPage() {
  return (
    <ProtectedFeedRoute>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { ease: "easeIn", duration: 0.5 } }} exit={{ opacity: 0, y: -100 }}>
        <Feed />
      </motion.div>
    </ProtectedFeedRoute>
  )
}