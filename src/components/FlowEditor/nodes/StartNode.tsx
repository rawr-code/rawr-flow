import { PiPlayFill } from 'react-icons/pi'

import EditorNode from '../EditorNode'

const StartNode = () => {
  return (
    <EditorNode label="on" title="start" icon={PiPlayFill} leftHandle={false} />
  )
}

export default StartNode
