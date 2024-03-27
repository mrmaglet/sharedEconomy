import { TableFooter, TableRow, TableCell } from "@/app/components/ui/table"
import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

const TotalFooter = ({ transactions }: Props) => {
  const totals = (
    Math.round(
      transactions.reduce((acc, transaction) => {
        return (acc += transaction.amount)
      }, 0) * 100
    ) / 100
  ).toFixed(0)

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell className="text-right">{totals}</TableCell>
      </TableRow>
    </TableFooter>
  )
}

export { TotalFooter }
