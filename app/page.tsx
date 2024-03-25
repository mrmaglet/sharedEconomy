"use client"

import { Transaction } from "@/types/types"
import { atom, useAtom } from "jotai"
import { read, utils } from "xlsx"
import { DropZone } from "./components/drop-zone/DropZone"
import { Table } from "./components/table/Table"

const transactionsAtom = atom<Transaction[]>([])

const Page = () => {
  const [transactions, setTransactions] = useAtom(transactionsAtom)

  const onCallback = (data: string | ArrayBuffer | null | undefined) => {
    const workbook = read(data)

    console.log(workbook)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const raw_data = utils.sheet_to_json(worksheet, { header: 1 })

    console.log("raw data", raw_data)

    const transfers = raw_data.filter((row: any, i) => i > 5 && row)

    console.log("transfers", transfers)

    const formatted = transfers.map((transfer: any) => {
      return {
        date: transfer[0],
        card: transfer[1],
        description: transfer[4],
        amount: transfer[5],
      }
    })

    console.log("formatted", formatted)

    const types = formatted.map((format: any) => {
      type Type = "Magnus privat" | "Dela Ani" | "Dela Magnus"
      let accountable = ""

      if (format.description.startsWith("CRV*")) accountable = "Magnus privat" as Type
      else if (format.card === "Extrakort") accountable = "Dela Ani" as Type
      else if (format.card === "Huvudkort") accountable = "Dela Magnus" as Type

      return { ...format, accountable }
    })

    console.log("labels", types)

    // setData(types)
    setTransactions(types)
  }

  return (
    <>
      <DropZone callback={onCallback} />

      {transactions?.length > 0 && (
        <div>
          <Table headline={"Ani Extrakort"} transactions={transactions} accountable={"Dela Ani"} />

          <Table
            headline="Magnus Huvudkort"
            transactions={transactions}
            accountable={"Dela Magnus"}
          />

          <Table
            headline="Magnus privat"
            transactions={transactions}
            accountable={"Magnus privat"}
          />
        </div>
      )}
    </>
  )
}

export default Page
