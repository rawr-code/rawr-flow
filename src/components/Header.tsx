const Header = () => {
  return (
    <header className="border-editor-node-border flex justify-between border-b px-6 py-3">
      <div className="flex flex-col">
        <h1 className="text-md font-bold">Automation Pipeline</h1>
        <span className="text-sm text-black/70">Get posts endpoint</span>
      </div>
      <div className="border-editor-node-border flex divide-x-2 rounded-md border">
        <button className="px-4 py-2 font-bold text-black">
          <span className="text-sm font-bold">Diagram view</span>
        </button>
        <button className="px-4 py-2 font-bold text-black/50">
          <span className="text-sm font-bold">Code editor</span>
        </button>
      </div>
      <div className="flex space-x-2">
        <button className="border-editor-node-border rounded-md border px-4 py-2 font-bold text-black/50">
          <span className="text-sm">Reset</span>
        </button>
        <button className="rounded-md border border-black bg-black px-4 py-2 font-bold text-white">
          <span className="text-sm">Publish</span>
        </button>
      </div>
    </header>
  )
}

export default Header
