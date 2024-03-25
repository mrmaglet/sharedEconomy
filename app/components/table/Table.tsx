import { Labels, Transaction } from "@/types/types"
import { Row } from "./Row"
import { RowWrapper } from "./RowWrapper"
import { TableWrapper } from "./TableWrapper"

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
          if (row.accountable === labels) {
            return (
              <RowWrapper key={`${row.date}${row.description}${row.amount}`}>
                <Row column="firstCol">{row.date}</Row>
                <Row column="secondCol">{row.description}</Row>
                <Row column="thirdCol">{row.amount}</Row>
              </RowWrapper>
            )
          }
        })}
      </TableWrapper>
    </>
  )
}

export { Table }
