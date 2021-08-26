import './styles/global.css'
import React, { useState } from 'react'
import { Tree } from './components/containers/Tree'
import { Code } from './components/containers/Code'
import { Console } from './components/containers/Console'
import { Template } from './components/Template'
import { runCode } from './services'

export const App = () => {
  const [output, setOutput] = useState('')

  const run = async (_code: string, path: string) => {
    try {
      const out = await runCode(path)
      setOutput(out)
      console.log(out)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <Template>
      <Tree />
      <Code onSave={run} />
      <Console output={output} />
    </Template>
  )
}
