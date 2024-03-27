"use client"

import { Transaction } from "@/types/types"
import { atom, useAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { ShareTable } from "@/app/components/common/table/ShareTable"
import { processExcelFile } from "@/app/(shared)/lib/excelProcessor"
import { TotalFooter } from "@/app/components/common/table/TotalFooter"
import { Input } from "@/app/components/ui/input"

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
          <div className="flex gap-10 flex-col">
            <ShareTable
              headline={"Ani Extrakort"}
              transactions={transactions}
              labels={"Dela Ani"}
            />

            <ShareTable
              headline="Magnus Huvudkort"
              transactions={transactions}
              labels={"Dela Magnus"}
            />

            <ShareTable
              headline="Magnus privat"
              transactions={transactions}
              labels={"Magnus privat"}
            />

            <br />

            <TotalFooter transactions={transactions} />
          </div>
        )}
      </div>
    </>
  )
}

export default Page
