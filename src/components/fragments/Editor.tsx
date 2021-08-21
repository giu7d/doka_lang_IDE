import React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import { languages } from 'prismjs'
import { highlightWithLineNumbers } from '../../utils/editor'

import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-crystal'
import 'prismjs/themes/prism.css'

interface IEditorProps {
  value: string
  onChange: (value: string) => void
}

export const Editor: React.VFC<IEditorProps> = ({ value, onChange }) => {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-6"></div>
      <SimpleCodeEditor
        tabSize={2}
        padding={10}
        textareaId="code"
        className="editor"
        value={value}
        onValueChange={onChange}
        highlight={value =>
          highlightWithLineNumbers(value, languages.crystal, 'crystal')
        }
      />
    </div>
  )
}
