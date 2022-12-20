interface Head {
  counts: {
    billCount: number
    resultCount: number
  }
}

type UrlType = string
type BillType = "Public" | "Private"
type BillStatus = "Current"

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
