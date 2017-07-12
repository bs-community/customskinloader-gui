export function swap<T> (oldList: T[], currentIndex: number, destIndex: number) {
  const list = oldList.slice()
  if (destIndex !== -1 && destIndex !== list.length) {
    const temp = list[currentIndex]
    list[currentIndex] = list[destIndex]
    list[destIndex] = temp
  }
  return list
}
