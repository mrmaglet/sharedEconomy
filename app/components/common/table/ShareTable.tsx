import { TotalFooter } from "@/app/components/common/table/TotalFooter"
import { Table, TableBody, TableCell, TableFooter, TableRow } from "@/app/components/ui/table"
import { Labels, Transaction } from "@/types/types"

interface Props {
  headline?: string
  transactions: Transaction[]
  labels: Labels
}

const ShareTable = ({ headline, transactions, labels }: Props) => {
  return (
    <div>
      {headline && <h2>{headline}</h2>}

      <Table>
        <TableBody>
          {transactions.map((row: Transaction) => {
            if (row.labels === labels) {
              return (
                <TableRow key={`${row.date}${row.description}${row.amount}`}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell className="text-right">
                    {(Math.round(row.amount * 100) / 100).toFixed(0)}
                  </TableCell>
                </TableRow>
              )
            }
          })}
        </TableBody>

        <TotalFooter
          transactions={transactions.filter((transaction) => transaction.labels === labels)}
        />
      </Table>

      {/* <Total transactions={transactions.filter((transaction) => transaction.labels === labels)} /> */}
    </div>
  )
}

export { ShareTable }
