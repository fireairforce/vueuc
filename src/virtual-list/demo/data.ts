import { ItemData } from '../src/type'

function createArray (length: number): number[] {
  const ret = []
  for (let i = 0; i < length; ++i) {
    ret.push(i)
  }
  return ret
}

export const basicData: ItemData[] = createArray(100000).map((_, i) => ({
  key: i,
  value: `item_${i}`
}))
