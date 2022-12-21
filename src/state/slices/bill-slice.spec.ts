import optionsReducer, {
  addFavorite,
  removeFavorite,
} from './bill-slice'
import type { BillsState } from './bill-slice'

describe('bills reducer', () => {
  const initialState: BillsState = {
    loading: false,
    total: 10,
    bills: [],
    favorites: [1, 2, 3],
  }

  it('should handle initial state', () => {
    expect(optionsReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      total: 0,
      bills: [],
      favorites: [],
    })
  })

  it('should add a value to favorites', () => {
    const actual = optionsReducer(initialState, addFavorite(5))
    expect(actual.favorites).toEqual([1, 2, 3, 5])
  })

  it('should remove a value from favorites', () => {
    const actual = optionsReducer(initialState, removeFavorite(2))
    expect(actual.favorites).toEqual([1, 3])
  })
})
