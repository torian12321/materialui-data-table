import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type Value = string
type SelectOption = {
  label: string
  value: Value
}
interface Props {
  id?: string
  label?: string
  options: SelectOption[]
  value?: Value
  onChange: (option: Value) => void
}

const SelectFilter = ({
  id = 'filter',
  label,
  options = [],
  value,
  onChange,
}: Props) => {
  const labelId = `${id}-label`

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(op => (
          <MenuItem value={op.value}>{op.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectFilter
