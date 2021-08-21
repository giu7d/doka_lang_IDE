import React, { useState } from 'react'
import { FiFile, FiPlay, FiSettings } from 'react-icons/fi'

import { Editor } from '../fragments/Editor'
import { fizzBuzzCode } from '../../utils/editor'

export const Code = () => {
  const [code, setCode] = useState(fizzBuzzCode)

  return (
    <div className="flex flex-col h-full w-full bg-gray-50">
      <div className="header">
        <div className="title">
          <FiFile />
          <h2 className="font-normal italic">file_name.dk</h2>
        </div>
        <div className="actions">
          <button className="icon-btn">
            <FiPlay />
          </button>
          <button className="icon-btn">
            <FiSettings />
          </button>
        </div>
      </div>
      <Editor value={code} onChange={setCode} />
    </div>
  )
}
