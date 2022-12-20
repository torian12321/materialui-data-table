import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import type { Bill } from '../../../state/slices/bill-slice'
import Header from './modal-details-header'
import Content from './modal-details-content'

interface Props {
  show?: boolean
  billDetails?: Bill
  onClose: VoidFunction
}

const ModalDetails = ({
  show = false,
  billDetails,
  onClose,
}: Props) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="details-dialog-title"
      open={show}
    >
      <Header id="details-dialog-title" onClose={onClose}>
        Bill Number: {billDetails?.number}
      </Header>
      <DialogContent dividers>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="language tabs">
              <Tab label="EN" />
              <Tab label="GA" />
            </Tabs>
          </Box>
          <Content
            value={value}
            index={0}
            title={billDetails?.shortTitleEn}
            body={billDetails?.titleEn}
          />
          <Content
            value={value}
            index={1}
            title={billDetails?.shortTitleGa}
            body={billDetails?.titleGa}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalDetails
