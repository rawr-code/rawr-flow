// Icons
import { TbMathFunction } from 'react-icons/tb'
import { BsTerminal } from 'react-icons/bs'
import { TbWorldSearch } from 'react-icons/tb'
import { TbBrandFirebase } from 'react-icons/tb'
import { RxLapTimer } from 'react-icons/rx'
import { FaListUl } from 'react-icons/fa6'

// Types
import { NodeConfig, DraggableNode } from '../types'

// it's for only draggable nodes in aside editor
export type NodeTypes =
  | 'multiply'
  | 'log'
  | 'http'
  | 'firebaseAuth'
  | 'interval'
  | 'request'

export const nodesConfig: Record<NodeTypes, (id: string) => NodeConfig> = {
  multiply: id => ({
    params: [
      {
        id: id + '-p1',
        label: 'a',
        type: 'n',
      },
      {
        id: id + '-p2',
        label: 'b',
        type: 'n',
      },
    ],
    outputs: [
      {
        id: id + '-o1',
        label: 'output',
        type: 'v',
      },
    ],
  }),
  log: id => ({
    params: [
      {
        id: id + '-p1',
        label: 'value',
        type: 's',
      },
    ],
  }),
  http: id => ({
    outputs: [
      {
        id: id + '-o1',
        label: 'output',
        type: 'j',
      },
    ],
  }),
  firebaseAuth: id => ({
    params: [
      {
        id: id + '-p1',
        label: 'headers',
        type: 'o',
      },
    ],
    outputs: [
      {
        id: id + '-o1',
        label: 'on fail',
        type: 'f',
      },
    ],
  }),
  interval: _ => ({
    params: [],
    outputs: [],
  }),
  request: id => ({
    outputs: [
      {
        id: id + '-o1',
        label: 'headers',
        type: 'o',
      },
    ],
  }),
}

export const nodes: Record<NodeTypes, DraggableNode> = {
  multiply: {
    label: 'function',
    title: 'multiply',
    icon: TbMathFunction,
  },
  log: {
    label: 'debug',
    title: 'log',
    icon: BsTerminal,
  },
  http: {
    label: 'api',
    title: 'http',
    icon: TbWorldSearch,
  },
  firebaseAuth: {
    label: 'firebase',
    title: 'authentication',
    icon: TbBrandFirebase,
  },
  interval: {
    label: 'timer',
    title: 'wait',
    icon: RxLapTimer,
  },
  request: {
    label: 'config',
    title: 'request',
    icon: FaListUl,
  },
}
