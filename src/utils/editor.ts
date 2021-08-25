import React from 'react'
import { Grammar, highlight } from 'prismjs'

export const isModifyTextKeyboardEvent = (event: React.KeyboardEvent) =>
  !event.key.match(/ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Alt|Control/g)
    ?.length

export const highlightWithLineNumbers = (
  value: string,
  grammar: Grammar,
  lang: string
) =>
  highlight(value, grammar, lang)
    .split('\n')
    .map((line, i) => `<span class='editor-line-number'>${i + 1}</span>${line}`)
    .join('\n')
