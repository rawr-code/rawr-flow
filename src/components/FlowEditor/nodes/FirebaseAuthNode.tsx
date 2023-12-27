// Components
import EditorNode from '../EditorNode'

// Types
import { CustomNodeProps } from '../types'

const FirebaseAuthNode = ({ type, data, ...aja }: CustomNodeProps) => {
  const { label, title, icon, params, outputs } = data
  console.log({ aja, type })
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

export default FirebaseAuthNode
