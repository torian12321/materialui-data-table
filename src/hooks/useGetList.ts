import { useEffect } from 'react'

import { useAppDispatch } from '../app/hooks'
import useFetch from './use-fetch'
import { setTotal, addBills } from '../features/bills/bill-slice'
import type { APIcall } from './legislations'

export const useGetList = () => {
  const dispatch = useAppDispatch()
  const { data = {} as APIcall } = useFetch('https://api.oireachtas.ie/v1/legislation')

  useEffect(() => {
    const bills = data?.results || []

    dispatch(setTotal(data?.head?.counts?.billCount || 0))
    dispatch(addBills(bills.map(({ bill }) => ({
      number: bill?.billNo,
      type: bill?.billType,
      status: bill?.status,
      sponsor: bill?.sponsors?.map(sp => sp?.sponsor?.as?.showAs || ''),
    }))))
  }, [dispatch, data])
}