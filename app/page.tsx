"use client"

import { Transaction } from "@/types/types"
import { atom, useAtom } from "jotai"
import { DropZone } from "./components/drop-zone/DropZone"
import { Table } from "./components/table/Table"
import { processExcelFile } from "./components/excelProcessor"
import { Total } from "./components/table/Total"

const transactionsAtom = atom<Transaction[]>([])

const Page = () => {
  const [transactions, setTransactions] = useAtom(transactionsAtom)

  const onFileDropped = (data: ArrayBuffer) => {
    const workbook = processExcelFile(data)
      .getFirstSheet()
      .stripFirstNrRows(5)
      .createColumns()
      .setLabels()
      .getValue()

    setTransactions(workbook)
  }

  return (
    <>
      <DropZone callback={onFileDropped} />

      <div style={{ width: "fit-content" }}>
        {transactions?.length > 0 && (
          <div>
            <Table headline={"Ani Extrakort"} transactions={transactions} labels={"Dela Ani"} />

            <Table headline="Magnus Huvudkort" transactions={transactions} labels={"Dela Magnus"} />

            <Table headline="Magnus privat" transactions={transactions} labels={"Magnus privat"} />

            <br />

            <Total transactions={transactions} />
          </div>
        )}
      </div>
    </>
  )
}

export default Page
