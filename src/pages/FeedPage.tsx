import { Feed } from "../components/Feed";
import { ProtectedFeedRoute } from "../components/ProtectedRoute";

export default function FeedPage() {
  return (
    <ProtectedFeedRoute>
      <Feed />
    </ProtectedFeedRoute>
  )
}