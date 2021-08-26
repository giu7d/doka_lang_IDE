import React from 'react'
import { FiTerminal, FiTrash } from 'react-icons/fi'

export const Console = ({ output = '' }) => {
  return (
    <div className="console">
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
      <div className="flex flex-col flex-shrink flex-grow overflow-auto">
        <div className="px-8 w-auto h-full font-mono text-white text-xs">
          {output.split(/\n/g).map((el, key) => (
            <span
              className="block w-full break-words"
              key={`console-line-${key}`}
            >
              {el}
            </span>
          ))}
          <div className="h-1/3"></div>
        </div>
      </div>
    </div>
  )
}
