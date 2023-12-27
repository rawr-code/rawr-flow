import { useCallback, useId } from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useReactFlow } from 'reactflow'
import short from 'short-uuid'
import CustomDragOverlay from './CustomDragOverlay'
import { getNodeConfig } from './FlowEditor/utils'

interface CustomDndContextProps {
  children: React.ReactNode
}

const CustomDndContext = ({ children }: CustomDndContextProps) => {
  const ctxId = useId()
  const { setNodes, screenToFlowPosition } = useReactFlow()

  const onDragEnd = useCallback(
    ({ active }: DragEndEvent) => {
      const type = active.data.current?.type
      if (!type) return

      const el = document.getElementById('overlay-id')!
      const clientRect = el.getBoundingClientRect()

      const position = screenToFlowPosition({
        x: clientRect.left,
        y: clientRect.top,
      })

      const ID = short.generate()

      const newNode = {
        id: ID,
        type,
        position,
        data: getNodeConfig(type, ID),
      }

      setNodes(nds => nds.concat(newNode))
    },
    [screenToFlowPosition, setNodes],
  )

  return (
    <DndContext id={ctxId} onDragEnd={onDragEnd}>
      <CustomDragOverlay />
      {children}
    </DndContext>
  )
}

export default CustomDndContext
