import fs from 'fs'
import { join } from 'path'
import markdownToHtml from '@lib/markdownToHtml'

const dataDirectory = join(process.cwd(), 'data')

export default (fileName: string) => {
  const fullPath = join(dataDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return markdownToHtml(fileContents)
}
