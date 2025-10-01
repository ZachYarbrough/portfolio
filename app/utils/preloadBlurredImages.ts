
import fs from 'fs'
import path from 'path'

export function getAllBlurredImages(dir: string): string[] {
  let results: string[] = []

  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      results = results.concat(getAllBlurredImages(filePath))
    } else if (file.endsWith('_blurred.webp')) {
      // Get path relative to 'public' for browser URL
      const relativeToPublic = path.relative(path.join(process.cwd(), 'public'), filePath)
      const url = '/' + relativeToPublic.replace(/\\/g, '/') // ensure forward slashes and leading slash
      results.push(url)
    }
  })

  return results
}

