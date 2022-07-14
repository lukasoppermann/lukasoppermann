import fs from 'fs'
import { join } from 'path'
import markdownToHtml from '@utils/markdownToHtml'

const dataDirectory = join(process.cwd(), 'data')

const readMarkdownFile = (fileName: string) => {
  const fullPath = join(dataDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return markdownToHtml(fileContents)
}

export default readMarkdownFile
