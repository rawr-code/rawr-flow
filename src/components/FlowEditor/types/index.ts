import { IconType } from 'react-icons'
import { NodeProps } from 'reactflow'

// Config
import { NodeTypes } from '../config'

type NodeParam = {
  id: string
  label: string
  type: string
}

export type DraggableNode = {
  label: string
  title: string
  icon: IconType
}

export interface NodeConfig {
  params?: NodeParam[]
  outputs?: NodeParam[]
}

export type CustomNodeProps = Omit<
  NodeProps<NodeConfig & DraggableNode>,
  'type'
> & {
  type: NodeTypes
}
