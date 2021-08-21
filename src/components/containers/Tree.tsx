import React from 'react'
import { FiGitBranch } from 'react-icons/fi'

export const Tree = () => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col">
      <div className="header">
        <div className="title">
          <FiGitBranch />
          <h2>Tree</h2>
        </div>
      </div>
    </div>
  )
}
