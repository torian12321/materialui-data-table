import { useState } from 'react'
import Box from '@mui/material/Box'
import Select from '../components/select'
import { TYPE_OPTIONS, STATUS_OPTIONS } from './filters.constants'

const Filters = () => {
  const [type, setType] = useState('')
  const [age, setAge] = useState('')

  const handleChange = (v: string) => {
    setAge(v)
  }
  const handleChange2 = (v: string) => {
    setType(v)
  }

  return (
    <Box sx={{ minWidth: 120,  m: 4 }}>
      <Select
        label='Status'
        id='status-filter'
        value={age}
        onChange={handleChange}
        options={STATUS_OPTIONS}
      />
      <Select
        label='Type'
        id='type-filter'
        value={type}
        onChange={handleChange2}
        options={TYPE_OPTIONS}
      />
    </Box>
  )
}

export default Filters
