import { NodeTypes, nodes, nodesConfig } from '../config'

export const getNodeConfig = (type: NodeTypes, id: string) => {
  const configGenerator = nodesConfig[type]

  if (!configGenerator) return

  return {
    ...nodes[type],
    ...configGenerator(id),
  }
}
