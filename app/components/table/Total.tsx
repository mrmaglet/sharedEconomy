import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

const Total = ({ transactions }: Props) => {
  console.log("transactions", transactions)

  const totals = (
    Math.round(
      transactions.reduce((acc, transaction) => {
        return (acc += transaction.amount)
      }, 0) * 100
    ) / 100
  ).toFixed(0)

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Total: </div>

      <div>{totals}</div>
    </div>
  )
}

export { Total }
