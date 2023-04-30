export function PostLoading() {
  return (
    <article aria-label="Loading Post" className="border border-gray-400 rounded-2xl min-w-full overflow-hidden h-fit">
      <header className="flex justify-between w-full p-6 bg-gray-500 animate-pulseLoadingBackground">
        <div className="w-1/4 h-4 bg-white rounded"></div>
        <div className="flex gap-7">
          <div className="w-6 h-6 bg-white rounded"></div>
          <div className="w-6 h-6 bg-white rounded"></div>
        </div>
      </header>
      <div className="flex flex-col p-6 gap-4">
        <div className="flex justify-between">
          <div className="w-1/4 h-4 bg-gray-400 rounded animate-pulseLoadingBackground"></div>
          <div className="w-1/4 h-4 bg-gray-400 rounded animate-pulseLoadingBackground"></div>
        </div>
        <div>
          <p>
            <div className="w-full h-4 bg-gray-300 rounded animate-pulseLoadingBackground"></div>
            <div className="w-full h-4 bg-gray-300 rounded animate-pulseLoadingBackground"></div>
            <div className="w-full h-4"></div>
            <div className="w-full h-4 bg-gray-300 rounded animate-pulseLoadingBackground"></div>
          </p>
        </div>
      </div>
    </article>
  );
}
