import { Transaction } from "@/types/types"

/**
 * Total sum.
 * Rounded up to nearest int.
 */
export const sumTransactions = (transactions: Transaction[]) => {
  const totals = (
    Math.round(
      transactions.reduce((acc, transaction) => {
        return (acc += transaction.amount)
      }, 0) * 100
    ) / 100
  ).toFixed(0)

  return Number(totals)
}

export const roundToInteger = (num: number) => Number((Math.round(num * 100) / 100).toFixed(0))
