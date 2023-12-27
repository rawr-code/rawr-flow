'use client'

import { ReactFlowProvider } from 'reactflow'

// Components
import { Aside, CustomDndContext, Flow, Header } from '@components'

export default function App() {
  return (
    <ReactFlowProvider>
      <CustomDndContext>
        <div className="flex h-full w-full flex-col">
          <Header />
          <div className="flex h-full w-full">
            <Aside />
            <Flow />
          </div>
        </div>
      </CustomDndContext>
    </ReactFlowProvider>
  )
}
