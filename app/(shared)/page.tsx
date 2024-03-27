"use client"

import { Transaction } from "@/types/types"
import { atom, useAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { ShareTable } from "@/app/components/common/table/ShareTable"
import { processExcelFile } from "@/app/(shared)/lib/excelProcessor"
import { TotalFooter } from "@/app/components/common/table/TotalFooter"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"

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

      <PersonInputs />

      <ShareResults />

      <br />

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

            <TotalFooter transactions={transactions} />
          </div>
        )}
      </div>
    </>
  )
}

export default Page
