import { getSelectedBill } from '../../../state/selectors/options-selectors'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { unselectBill } from '../../../state/slices/options-slice'

import Modal from './modal-details'

export const ModalDetails = () => {
  const dispatch = useAppDispatch()
  const selectedBill = useAppSelector(getSelectedBill)
  console.log(selectedBill)

  return (
    <Modal
      show={Boolean(selectedBill)}
      billDetails={selectedBill}
      onClose={() => dispatch(unselectBill())}
    />
  )
}

export default ModalDetails
