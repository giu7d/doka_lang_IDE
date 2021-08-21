import './styles/global.css'
import React from 'react'
import { Tree } from './components/containers/Tree'
import { Code } from './components/containers/Code'
import { Console } from './components/containers/Console'
import { Template } from './components/Template'

export const App = () => {
  return (
    <Template>
      <Tree />
      <Code />
      <Console />
    </Template>
  )
}
