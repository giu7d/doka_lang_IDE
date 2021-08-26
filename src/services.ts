import fs from 'fs'
import { isAbsolute, join } from 'path'
import { remote } from 'electron'
import childProcess from 'child_process'

export const getArgPath = () => {
  const path = remote.getGlobal('path')

  if (isAbsolute(path)) return path

  return join(process.cwd(), path)
}

export const readDir = (path: string) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (!err) return resolve(files)
      return reject(err)
    })
  })

export const readFile = (path: string): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, files) => {
      if (!err) return resolve(files)
      return reject(err)
    })
  })

export const saveFile = (path: string, data: any): Promise<void> =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (!err) return resolve()
      return reject(err)
    })
  })

export const runCode = (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    childProcess.exec(
      `java -jar ${process.cwd()}/bundles/doka.jar -t ${path}`,
      (err, out: string) => {
        if (!err) return resolve(out)
        return reject(err)
      }
    )
  })