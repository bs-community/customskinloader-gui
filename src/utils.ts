export function swap (list: any[], currentIndex: number, destIndex: number) {
  if (destIndex !== -1 && destIndex !== list.length) {
    const temp = list[currentIndex]
    list[currentIndex] = list[destIndex]
    list[destIndex] = temp
  }
  return list
}
