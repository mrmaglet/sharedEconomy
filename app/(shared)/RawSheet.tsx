"use client"

import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { TableCellSelect } from "@/app/components/common/select-table/TableCellSelect"
import { TableRowSelect } from "@/app/components/common/select-table/TableRowSelect"
import { Table, TableCell, TableHead, TableRow } from "@/app/components/ui/table"
import { RawSheet, RawSheetRow } from "@/types/types"
import { useAtomValue } from "jotai"
import React, { useEffect, useState } from "react"

const RawSheet = () => {
  const rawSheet = useAtomValue(rawSheetAtom)
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  useEffect(() => {
    console.log(selectedRow)
  }, [])

  if (!rawSheet) return

  const handleRowClick = (row: number) => {
    console.log(row, "row")

    setSelectedRow((prev) => (prev === row ? null : row))
  }

  return (
    <Table>
      {rawSheet.map((row: RawSheetRow, i: number) => (
        <TableRowSelect
          onClick={() => handleRowClick(i)}
          key={i}
          className={`${selectedRow === i ? "bg-amber-500 hover:bg-amber-500" : ""} `}
        >
          {row.map((cell: string | number, j: number) => (
            <TableCell key={`${i}-${j}`}>{cell}</TableCell>
          ))}
        </TableRowSelect>
      ))}
    </Table>
  )
}

export { RawSheet }
