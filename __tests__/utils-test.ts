import * as utils from '../src/utils'

describe('test for utils', () => {
  it('swap two item of an array immutably', () => {
    const oldArray = [1, 2, 3]
    const newArray = utils.swap(oldArray, 2, 0)
    expect(oldArray).toEqual([1, 2, 3])
    expect(newArray).toEqual([3, 2, 1])
  })
})
