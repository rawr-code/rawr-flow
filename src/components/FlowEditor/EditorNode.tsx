import { useMemo } from 'react'
import { Handle, Position, useEdges } from 'reactflow'
import { IconType } from 'react-icons'

// Utils
import { twclsx } from '@utils'

interface EditorNodeProps {
  label: string
  title: string
  icon: IconType
  children?: React.ReactNode
  leftHandle?: boolean
  righttHandle?: boolean
}

function EditorNode({
  label,
  title,
  icon: Icon,
  children,
  leftHandle = true,
  righttHandle = true,
}: EditorNodeProps) {
  return (
    <div className="bg-editor-node-bg border-editor-node-border min-w-40 rounded-lg border">
      <div className="relative flex items-center justify-between p-2">
        {leftHandle ? (
          <Handle
            type="target"
            id="node-source"
            position={Position.Left}
            className="!-left-1 !h-3 !w-1 !min-w-0 !rounded-none !rounded-l-sm !border-none !bg-black"
          />
        ) : null}
        <div className="flex items-center space-x-2">
          <div className="text-editor-node-text flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
            <Icon size={20} />
          </div>
          <div className="flex flex-col pr-1 capitalize">
            <p className="text-[10px] opacity-50">{label}</p>
            <p className="text-xs font-bold">{title}</p>
          </div>
        </div>
        {righttHandle ? (
          <Handle
            type="source"
            id="node-target"
            position={Position.Right}
            className="!-right-1 !h-3 !w-1 !min-w-0 !rounded-none !rounded-r-sm !border-none !bg-black"
          />
        ) : null}
      </div>
      {children}
    </div>
  )
}

interface EditorNodeBodyProps {
  children?: React.ReactNode
}

function EditorNodeBody({ children }: EditorNodeBodyProps) {
  return (
    <div className="border-b-editor-node-border flex justify-between space-x-6 border-t px-2 py-3">
      {children}
    </div>
  )
}

interface EditorNodeBodySectionProps {
  children?: React.ReactNode
}

function EditorNodeBodySection({ children }: EditorNodeBodySectionProps) {
  return <div className="min-w-1/2 flex flex-col space-y-3">{children}</div>
}

interface EditorNodeParamProps {
  direction?: 'left' | 'right'
  params?: string[]
  id: string
  label: string
  type: string
}

const EditorNodeParam = ({
  direction = 'left',
  id,
  label,
  type,
}: EditorNodeParamProps) => {
  const edges = useEdges()

  const isConnected = useMemo(() => {
    const connection = edges.find(e => e.id.includes(id))

    return !!connection
  }, [edges, id])

  const isLeft = direction === 'left'

  return (
    <div className="relative flex h-6 items-center justify-between text-xs font-bold">
      <Handle
        type={isLeft ? 'target' : 'source'}
        id={id}
        position={isLeft ? Position.Left : Position.Right}
        className={twclsx(
          '!h-3 !w-1 !min-w-0 !rounded-none !border-none ',
          isLeft ? '!-left-3 !rounded-l-sm' : '!-right-3 !rounded-r-sm',
          isConnected ? '!bg-black' : '!bg-black/25',
        )}
      />
      <div
        className={twclsx(
          'flex flex-1 items-center justify-between space-x-2 capitalize',
          !isLeft && 'flex-row-reverse space-x-reverse text-right',
        )}
      >
        <span
          className={twclsx(
            'mr-1 flex min-h-4 min-w-4 items-center justify-center rounded text-[10px] font-bold uppercase ',
            isConnected ? 'bg-black text-white' : 'bg-gray-100 text-black/50',
          )}
        >
          {type}
        </span>
        <p
          className={twclsx(
            'w-full leading-[10px]',
            isConnected ? 'text-black' : 'text-black/50',
          )}
        >
          {label}
        </p>
      </div>
    </div>
  )
}

EditorNode.Body = EditorNodeBody
EditorNode.Section = EditorNodeBodySection
EditorNode.Param = EditorNodeParam

export default EditorNode
