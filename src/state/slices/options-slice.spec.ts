import optionsReducer, {
  goToNextPage,
  goToPrevPage,
  selectBill,
  unselectBill,
  setRowsPerPage,
} from './options-slice'
import type { OptionsState } from './options-slice'

describe('options reducer', () => {
  const initialState: OptionsState = {
    tablePage: 2,
    rowsPerPage: 5
  }

  it('should handle initial state', () => {
    expect(optionsReducer(undefined, { type: 'unknown' })).toEqual({
      selectedBill: undefined,
      tablePage: 0,
      rowsPerPage: 5
    })
  })

  it('should handle go to next page', () => {
    const actual = optionsReducer(initialState, goToNextPage())
    expect(actual.tablePage).toEqual(3)
  })

  it('should handle go to previous page', () => {
    const actual = optionsReducer(initialState, goToPrevPage())
    expect(actual.tablePage).toEqual(1)
  })

  it('should stay at page 0 when it is alredy on the first page', () => {
    const actual = optionsReducer({ ...initialState, tablePage: 0 }, goToPrevPage())
    expect(actual.tablePage).toEqual(0)
  })

  it('should handle custom bill Id when set', () => {
    const actual = optionsReducer(initialState, selectBill(123))
    expect(actual.selectedBill).toEqual(123)
  })

  it('should return undefined when unselecting bill', () => {
    const actual = optionsReducer({ ...initialState, selectedBill: 123 }, unselectBill())
    expect(actual.selectedBill).toEqual(undefined)
  })

  it('should set custom rows per page', () => {
    const actual = optionsReducer(initialState, setRowsPerPage(10))
    expect(actual.rowsPerPage).toEqual(10)
  })
})
