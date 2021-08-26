import React, { useState, useEffect } from 'react'
import { FiFile, FiPlay, FiSettings } from 'react-icons/fi'

import { Editor } from '../fragments/Editor'
import { getArgPath, readFile, saveFile } from '../../services'
import { isModifyTextKeyboardEvent } from '../../utils/editor'

interface ICodeProps {
  onChange?: (code: string) => void
  onSave?: (code: string, path: string) => void
  onLoad?: (code: string, path: string) => void
}

export const Code: React.VFC<ICodeProps> = ({
  onChange = () => {},
  onSave = () => {},
  onLoad = () => {}
}) => {
  const [isSaved, setIsSaved] = useState(true)
  const [code, setCode] = useState('')

  useEffect(() => {
    handleLoadFile()
  }, [])

  useEffect(() => {
    onChange(code)
  }, [code])

  const handleKeyboardEvent = (event: React.KeyboardEvent) => {
    if (isModifyTextKeyboardEvent(event)) setIsSaved(false)

    if (event.ctrlKey && event.key === 's') handleSaveFile()
  }

  const handleLoadFile = async () => {
    try {
      const path = getArgPath()
      const fileAsBuffer = await readFile(path)
      const fileAsString = fileAsBuffer.toString('utf-8')
      setCode(fileAsString)
      onLoad(code, path)
      console.log(path, 'successfully loaded!')
    } catch (error) {
      console.warn(error)
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleSaveFile = async () => {
    try {
      const path = getArgPath()
      await saveFile(path, code)
      setIsSaved(true)
      onSave(code, path)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <div
      className="flex flex-col h-full w-full bg-gray-50"
      onKeyDown={handleKeyboardEvent}
    >
      <div className="header">
        <div className="title">
          <FiFile />
          <h2 className={`font-normal ${!isSaved && 'italic'}`}>
            file_name.dk
          </h2>
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
