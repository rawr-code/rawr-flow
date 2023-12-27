import { nodes } from './FlowEditor/config'

import CustomDraggable from './CustomDraggable'

const Aside = () => {
  return (
    <aside className="border-editor-node-border flex h-full w-60 flex-col border-r">
      <div className="h-full w-full space-y-4 overflow-y-auto p-4">
        {Object.entries(nodes).map(([type, info]) => {
          return (
            <CustomDraggable
              key={type}
              id={type}
              type={type}
              className="border-editor-node-border flex w-full cursor-grab items-center space-x-2 rounded-lg border bg-white p-2"
            >
              <div className="text-editor-node-text flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                <info.icon size={20} />
              </div>
              <div className="flex flex-col items-start pr-1 capitalize">
                <p className="text-[10px] opacity-50">{info.label}</p>
                <p className="text-xs font-bold">{info.title}</p>
              </div>
            </CustomDraggable>
          )
        })}
      </div>
    </aside>
  )
}

export default Aside
