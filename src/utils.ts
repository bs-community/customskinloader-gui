import { API } from './csl-config-types'

export function swap<T> (oldList: T[], currentIndex: number, destIndex: number): T[] {
  const list = oldList.slice()
  if (destIndex !== -1 && destIndex !== list.length) {
    const temp = list[currentIndex]
    list[currentIndex] = list[destIndex]
    list[destIndex] = temp
  }
  return list
}

export function downloadFile (filename: string, content: string): void {
  const element = document.createElement('a')
  element.href = content
  element.download = filename
  element.click()
}
