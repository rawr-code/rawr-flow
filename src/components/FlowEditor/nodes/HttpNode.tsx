// Components
import EditorNode from '../EditorNode'

// Types
import { CustomNodeProps } from '../types'

const HttpNode = ({ data }: CustomNodeProps) => {
  const { label, title, icon, outputs } = data

  return (
    <EditorNode label={label} title={title} icon={icon}>
      <EditorNode.Body>
        <EditorNode.Section />
        <EditorNode.Section>
          {outputs?.map(o => (
            <EditorNode.Param
              key={o.id}
              id={o.id}
              label={o.label}
              type={o.type}
              direction="right"
            />
          ))}
        </EditorNode.Section>
      </EditorNode.Body>
    </EditorNode>
  )
}

export default HttpNode
