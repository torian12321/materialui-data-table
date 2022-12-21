import optionsReducer, {
  setStatusFilter,
  clearStatusFilter,
  setTypeFilter,
  clearTypeFilter,
} from './filters-slice'
import type { FiltersState } from './filters-slice'

describe('options reducer', () => {
  const initialState: FiltersState = {
    status: undefined,
    type: undefined,
  }

  it('should handle initial state', () => {
    expect(optionsReducer(undefined, { type: 'unknown' })).toEqual({
      status: undefined,
      type: undefined,
    })
  })

  it('should set custom value on status filer', () => {
    const actual = optionsReducer(initialState, setStatusFilter('Current'))
    expect(actual.status).toEqual('Current')
  })

  it('should clear status filter', () => {
    const actual = optionsReducer(initialState, clearStatusFilter())
    expect(actual.status).toEqual(undefined)
  })

  it('should set custom value on type filer', () => {
    const actual = optionsReducer(initialState, setTypeFilter('Public'))
    expect(actual.type).toEqual('Public')
  })

  it('should clear type filter', () => {
    const actual = optionsReducer(initialState, clearTypeFilter())
    expect(actual.type).toEqual(undefined)
  })
})
