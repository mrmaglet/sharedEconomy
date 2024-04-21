export type Col = "firstCol" | "secondCol" | "thirdCol"

export type Labels = "Dela Ani" | "Dela Magnus" | "Magnus privat"

export type Transaction = {
  date: string
  description: string
  amount: number
  labels: Labels
}

/** Parsed json from excel file */
export type RawSheet = RawSheetRow[]
export type RawSheetRow = (string | number)[]
