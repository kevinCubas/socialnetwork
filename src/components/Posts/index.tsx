import { Post } from "../Post";

export function Posts() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <ul className="flex flex-col items-center w-full gap-6">
      {array.map((item, index) => {
        return (
          <li key={index}>
            <Post />
          </li>
        )
      }
      )}
    </ul>
  )
}