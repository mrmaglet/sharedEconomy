export type Col = "firstCol" | "secondCol" | "thirdCol"

export type Labels = "Dela Ani" | "Dela Magnus" | "Magnus privat"

export type Transaction = {
  date: string
  description: string
  amount: number
  labels: Labels
}

export type RawSheetRow = (string | number)[]
export type RawSheet = RawSheetRow[]
