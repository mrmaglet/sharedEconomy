import { TableFooter, TableRow, TableCell, Table } from "@/app/components/ui/table"
import { sumTransactions } from "@/lib/transactions-utils"
import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

/**
 * Shared table footer for tables.
 */
const TableSummaryFooter = ({ transactions }: Props) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell className="text-right">{sumTransactions(transactions)}</TableCell>
      </TableRow>
    </TableFooter>
  )
}

export { TableSummaryFooter }
