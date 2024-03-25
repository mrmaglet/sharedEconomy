export type Col = "firstCol" | "secondCol" | "thirdCol"

export type Accountable = "Dela Ani" | "Dela Magnus" | "Magnus privat"

export type Transaction = {
  date: string
  description: string
  amount: number
  accountable: Accountable
}
