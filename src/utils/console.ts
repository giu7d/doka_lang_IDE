const PARSE_SECTION_TOKEN = '>\tParse tree'
const ERROR_TOKEN = '> Encontrado:'

export type OutputLine = {
  className: string
  children: string
}

export type CompileError = {
  row?: number
  col?: number
}

export const separateOutputFromTreeSection = (value: string) => {
  const [output = '', tree = ''] = value.split(PARSE_SECTION_TOKEN)
  return [output, tree]
}

export const transformIntoOutputLine = (out: string): OutputLine[] =>
  out.split(/\n/g).map(children => ({ className: '', children }))

export const getErrors = (lines: OutputLine[]): CompileError[] =>
  lines
    .filter(el => el.children.match(ERROR_TOKEN))
    .map(error => {
      const positionAsString = error.children
        .replace(/(.*)-/g, '')
        .replace(/[^\d,]/g, '')

      const position = positionAsString.split(',')

      const row = Number.parseInt(position[0])
      const col = Number.parseInt(position[1])

      return { row, col }
    })
