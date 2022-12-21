import Select from '../components/select'
import { getTypeFilter, getStatusFilter } from '../../state/selectors/filters-selectors'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { setStatusFilter, setTypeFilter } from '../../state/slices/filters-slice'

import { TYPE_OPTIONS, STATUS_OPTIONS } from './filters.constants'
import './filters.css'

const Filters = () => {
  const dispatch = useAppDispatch()
  const type = useAppSelector(getTypeFilter)
  const status = useAppSelector(getStatusFilter)

  return (
    <div className="filters-wrapper">
      <Select
        label='Status'
        id='status-filter'
        value={status}
        onChange={(v: string) => dispatch(setStatusFilter(v))}
        options={STATUS_OPTIONS}
      />
      <Select
        label='Type'
        id='type-filter'
        value={type}
        onChange={(v: string) => dispatch(setTypeFilter(v))}
        options={TYPE_OPTIONS}
      />
    </div>
  )
}

export default Filters
