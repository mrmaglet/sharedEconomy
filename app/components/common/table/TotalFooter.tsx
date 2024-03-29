import { TableFooter, TableRow, TableCell } from "@/app/components/ui/table"
import { sumTransactions } from "@/lib/transactions-utils"
import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

const TotalFooter = ({ transactions }: Props) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>

        <TableCell className="text-right">{sumTransactions(transactions)}</TableCell>
      </TableRow>
    </TableFooter>
  )
}

export { TotalFooter }
