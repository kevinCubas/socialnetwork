import { FeedForm } from "../FeedForm";
import { Header } from "../Header";
import { Posts } from "../Posts";
export function Feed() {
  return (
    <main
      className="flex flex-col items-center gap-6 
        min-h-screen w-full 
        bg-white 
        max-w-[800px] 
        mx-auto my-0"
    >
      <Header />
      <section className="flex flex-col items-center w-full p-6 gap-6">
        <FeedForm />
        <Posts />
      </section>
    </main>
  )
}