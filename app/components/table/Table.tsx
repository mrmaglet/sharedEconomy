import { Labels, Transaction } from "@/types/types"
import { Row } from "./Row"
import { RowWrapper } from "./RowWrapper"
import { TableWrapper } from "./TableWrapper"
import { Total } from "./Total"

interface Props {
  headline?: string
  transactions: Transaction[]
  labels: Labels
}

const Table = ({ headline, transactions, labels }: Props) => {
  return (
    <>
      {headline && <h2>{headline}</h2>}

      <TableWrapper>
        {transactions.map((row: Transaction) => {
          if (row.labels === labels) {
            return (
              <RowWrapper key={`${row.date}${row.description}${row.amount}`}>
                <Row column="firstCol">{row.date}</Row>
                <Row column="secondCol">{row.description}</Row>
                <Row column="thirdCol">{(Math.round(row.amount * 100) / 100).toFixed(0)}</Row>
              </RowWrapper>
            )
          }
        })}

        <Total transactions={transactions.filter((transaction) => transaction.labels === labels)} />
      </TableWrapper>
    </>
  )
}

// (Math.round(num * 100) / 100).toFixed(2)

export { Table }
