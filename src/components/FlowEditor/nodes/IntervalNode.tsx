// Components
import EditorNode from '../EditorNode'

// Types
import { CustomNodeProps } from '../types'

const IntervalNode = ({ data }: CustomNodeProps) => {
  const { label, title, icon } = data

  return (
    <EditorNode label={label} title={title} icon={icon}>
      <EditorNode.Body>
        <p className="space-x-1">
          <span className="text-xs">Wait for</span>
          <span className="text-xs font-bold underline">100ms</span>
          <span className="text-xs">have passed</span>
        </p>
      </EditorNode.Body>
    </EditorNode>
  )
}

export default IntervalNode
