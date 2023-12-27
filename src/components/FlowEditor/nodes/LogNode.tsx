// Components
import EditorNode from '../EditorNode'

// Types
import { CustomNodeProps } from '../types'

const LogNode = ({ data }: CustomNodeProps) => {
  const { label, title, icon, params } = data

  return (
    <EditorNode label={label} title={title} icon={icon}>
      <EditorNode.Body>
        <EditorNode.Section>
          {params?.map(p => (
            <EditorNode.Param
              key={p.id}
              id={p.id}
              label={p.label}
              type={p.type}
            />
          ))}
        </EditorNode.Section>
      </EditorNode.Body>
    </EditorNode>
  )
}

export default LogNode
