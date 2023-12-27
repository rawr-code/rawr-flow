'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  ConnectionLineType,
} from 'reactflow'
import 'reactflow/dist/style.css'

import nodeTypes from 'src/components/FlowEditor/nodes'

const initialNodes = [
  {
    id: 'start',
    type: 'start',
    data: {},
    position: {
      x: -366,
      y: -261,
    },
    deletable: false,
  },
]

export default function Flow() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges(eds =>
        addEdge(
          {
            ...params,
            type: 'smoothstep',
          },
          eds,
        ),
      )
    },
    [setEdges],
  )

  return (
    <div className="h-full w-full">
      <ReactFlow
        className="bg-editor-bg"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineType={ConnectionLineType.SmoothStep}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        maxZoom={1}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
