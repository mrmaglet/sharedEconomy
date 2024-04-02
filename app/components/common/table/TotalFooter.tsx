import { TableFooter, TableRow, TableCell, Table } from "@/app/components/ui/table"
import { sumTransactions } from "@/lib/transactions-utils"
import { Transaction } from "@/types/types"
import React from "react"

interface Props {
  transactions: Transaction[]
}

/**
 * A fill width stand alone table footer that sums up the transactions.
 */
const TotalFooter = ({ transactions }: Props) => {
  return (
    <Table>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{sumTransactions(transactions)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export { TotalFooter }
