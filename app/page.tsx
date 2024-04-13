"use client"

import { useAtom, useSetAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { ShareTable } from "@/app/(shared)/components/ShareTable"
import { processExcelFile } from "@/app/(shared)/lib/excelProcessor"
import { TotalFooter } from "@/app/components/common/table/TotalFooter"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"
import { rawSheetAtom, transactionsAtom } from "@/app/(shared)/lib/store"
import { RawSheet } from "@/app/(shared)/RawSheet"

const Page = () => {
  const [transactions, setTransactions] = useAtom(transactionsAtom)
  const setRawSheet = useSetAtom(rawSheetAtom)

  const onFileDropped = (data: ArrayBuffer) => {
    const workbook = processExcelFile(data)
      .getFirstSheet()
      .stripFirstNrRows(5)
      .createColumns()
      .setLabels()
      .getValue()

    setTransactions(workbook)

    const rawSheet = processExcelFile(data).getFirstSheet().getValue()
    setRawSheet(rawSheet)
  }

  return (
    <>
      <div className="container my-10">
        <DropZone callback={onFileDropped} className="mb-8" />

        <PersonInputs />

        {/* <ShareResults />  */}

        <br />

        {/* <RawSheet /> */}

        <div style={{ width: "fit-content" }}>
          {transactions?.length > 0 && (
            <>
              <div className="flex gap-10 flex-wrap">
                {/* <ShareTable
                  headline={"Extrakort"}
                  transactions={transactions}
                  labels={"Dela Ani"}
                />

                <ShareTable
                  headline="Huvudkort"
                  transactions={transactions}
                  labels={"Dela Magnus"}
                />

                <ShareTable
                  className="hidden"
                  headline="Privat"
                  transactions={transactions}
                  labels={"Magnus privat"}
                /> */}
              </div>
            </>
          )}
        </div>
      </div>

      {/* <TotalFooter
        transactions={transactions.filter(
          (transaction) => transaction.labels === "Dela Ani" || transaction.labels === "Dela Magnus"
        )}
      /> */}
    </>
  )
}

export default Page
