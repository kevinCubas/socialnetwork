export function Post() {
  return (
    <article
      className="border border-gray-400 rounded-2xl w-full overflow-hidden h-fit">
      <header className="w-full p-6 bg-blue text-white font-bold text-xl">
        <h3>Sou o Header</h3>
      </header>
      <div className="flex flex-col p-6 gap-4">
        <div className="flex justify-between text-gray-500">
          <p className="font-bold">@Kevin</p>
          <span>40 minutes ago</span>
        </div>
        <div className="">
          <p>Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
          </p>
        </div>
      </div>
    </article>
  )
}