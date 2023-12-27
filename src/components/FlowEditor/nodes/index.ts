/* eslint-disable @typescript-eslint/no-explicit-any */
import StartNode from './StartNode'
import RequestNode from './RequestNode'
import MultiplyNode from './MultiplyNode'
import LogNode from './LogNode'
import HttpNode from './HttpNode'
import FirebaseAuthNode from './FirebaseAuthNode'
import IntervalNode from './IntervalNode'

const nodeTypes = {
  start: StartNode,
  request: RequestNode,
  multiply: MultiplyNode,
  log: LogNode,
  http: HttpNode,
  firebaseAuth: FirebaseAuthNode,
  interval: IntervalNode,
} as any

export default nodeTypes
