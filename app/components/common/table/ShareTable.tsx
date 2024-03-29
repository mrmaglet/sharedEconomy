import { TotalFooter } from "@/app/components/common/table/TotalFooter"
import { Table, TableBody, TableCell, TableFooter, TableRow } from "@/app/components/ui/table"
import { roundToInteger } from "@/lib/transactions-utils"
import { Labels, Transaction } from "@/types/types"

interface Props {
  headline?: string
  transactions: Transaction[]
  labels: Labels
  className?: string
}

const ShareTable = ({ headline, transactions, labels, ...props }: Props) => {
  return (
    <div {...props}>
      {headline && <h2>{headline}</h2>}

      <Table>
        <TableBody>
          {transactions.map((row: Transaction) => {
            if (row.labels === labels) {
              return (
                <TableRow key={`${row.date}${row.description}${row.amount}`}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell className="text-right">{roundToInteger(row.amount)}</TableCell>
                </TableRow>
              )
            }
          })}
        </TableBody>

        <TotalFooter
          transactions={transactions.filter((transaction) => transaction.labels === labels)}
        />
      </Table>
    </div>
  )
}

export { ShareTable }
