interface Head {
  counts: {
    billCount: number
    resultCount: number
  }
}

export type UrlType = string
export type BillType = "Public" | "Private"
export type BillStatus = "Current" | "Enacted"

type BillSponsor = {
  as: {
    showAs: string,
    uri?: string
  },
  by: {
    showAs: string,
    uri?: string
  },
  isPrimary: boolean
}

export interface Bill {
  amendmentLists: []
  billNo: number
  billType: BillType,
  billTypeURI: UrlType
  billYear: string,
  sponsors: {
    sponsor: BillSponsor
  }[]
  status: BillStatus
}

export interface APIcall {
  head: Head
  results: {
    bill: Bill
  }[]
}
