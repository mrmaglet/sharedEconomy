import { sumTransactions } from "@/lib/transactions-utils"
import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

const TotalFooter = ({ transactions }: Props) => {
  return (
    <div className="flex justify-between w-full">
      <div>Total</div>
      <div>{sumTransactions(transactions)}</div>
    </div>
  )
}

export { TotalFooter }
