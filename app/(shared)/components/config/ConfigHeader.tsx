import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useAtomValue } from "jotai"
import React, { useState } from "react"

const ConfigHeader = () => {
  const rawSheet = useAtomValue(rawSheetAtom)

  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  if (!rawSheet) return

  return (
    <>
      <h2>Select your header row</h2>

      <Table hideHeader>
        <TableHeader>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
          <TableColumn>Header</TableColumn>
        </TableHeader>

        <TableBody>
          {rawSheet.map((row: RawSheetRow, i: number) => (
            <TableRow
              key={i}
              className={
                selectedRow === i ? "bg-blue-100 hover:bg-blue-200 font-bold" : "hover:bg-blue-100"
              }
              onClick={() => setSelectedRow((prev) => (prev === i ? null : i))}
            >
              {row.map((cell: string | number, j: number) => (
                <TableCell key={`${i}-${j}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export { ConfigHeader }
