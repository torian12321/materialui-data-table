import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TabPanelProps {
  title?: string
  body?: string
  index: number
  value: number
}

const ModalContent = ({
  title = '',
  body = '',
  value,
  index,
  ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{title}</Typography>
        <Typography dangerouslySetInnerHTML={({__html: body })} />
      </Box>
    )}
  </div>
)

export default ModalContent
