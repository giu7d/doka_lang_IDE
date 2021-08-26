import './styles/global.css'
import React, { useState } from 'react'

import { Tree } from './components/containers/Tree'
import { Code } from './components/containers/Code'
import { Console } from './components/containers/Console'
import { Template } from './components/Template'
import { compile, getArgPath } from './services'
import { parseStringToTree } from './utils/tree'
import { CompileError, OutputLine } from './utils/console'

export const App = () => {
  const [output, setOutput] = useState<OutputLine[]>([])
  const [errors, setErrors] = useState<CompileError[]>([])
  const [tree, setTree] = useState({})

  const handleClear = () => {
    setOutput([])
    setErrors([])
    setTree({})
  }

  const handleRun = async () => {
    try {
      const path = getArgPath()
      const response = await compile(path)

      setErrors(response.errors)
      setTree(parseStringToTree(response.tree))
      setOutput(response.output)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <Template>
      <Tree data={tree} />
      <Code errors={errors} onSave={handleRun} />
      <Console output={output} onClear={handleClear} />
    </Template>
  )
}
