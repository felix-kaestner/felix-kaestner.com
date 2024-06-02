import fs from 'fs'
import path from 'path'

type Post = {
  slug: string
  content: string
  metadata: Metadata
}

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return {content, metadata: metadata as Metadata}
}

export function getBlogPosts() {
  let dir = path.join(process.cwd(), 'app', 'blog', 'posts')

  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      let raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      let {content, metadata} = parseFrontmatter(raw)
      let slug = path.basename(file, path.extname(file))

      return {slug, content, metadata} as Post
    })
}
