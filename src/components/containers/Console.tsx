import React from 'react'
import { FiTerminal, FiTrash } from 'react-icons/fi'

export const Console = () => {
  return (
    <div className="h-full w-full bg-gray-900">
      <div className="header text-white">
        <div className="title">
          <FiTerminal />
          <h2>Output</h2>
        </div>
        <div className="actions">
          <button className="icon-btn">
            <FiTrash />
          </button>
        </div>
      </div>
    </div>
  )
}
