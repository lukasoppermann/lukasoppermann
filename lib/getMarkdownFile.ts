import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export type markdownFile = {
  filename: string,
  meta?: any,
  content: string
}

const getFileByName = (directory: string, filename: string) => {
  // get full path
  const fullPath = join(process.cwd(), directory, filename)
  // read file content
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // parse with gray matter to get meta data
  const { data, content } = matter(fileContents)
  // return content
  return { filename: filename, meta: data, content: content }
}

export const getMarkdownFile = (directory: string, filename?): markdownFile[] => {
  // set files
  let files = [filename]
  // read files from dir if not filename given
  if (!filename) {
    files = fs.readdirSync(join(process.cwd(), directory))
  }
  // read files and return
  return files.map(name => getFileByName(directory, name))
}