import React from 'react'
import { FiGitBranch } from 'react-icons/fi'
import TreeGraph from 'react-d3-tree'
import { treeSample } from '../../utils/tree'

export const Tree = () => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col">
      <div className="header">
        <div className="title">
          <FiGitBranch />
          <h2>Tree</h2>
        </div>
      </div>
      <div className="h-full w-full overflow-auto">
        <TreeGraph
          data={treeSample}
          orientation="vertical"
          pathFunc="straight"
          nodeSize={{ x: 100, y: 100 }}
          translate={{ x: 100, y: 100 }}
          collapsible
        />
      </div>
    </div>
  )
}
