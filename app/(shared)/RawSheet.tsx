"use client"

import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { useWizard } from "@/app/(shared)/lib/useWizard"
import { TableRowSelect } from "@/app/components/common/select-table/TableRowSelect"
import { Button } from "@/app/components/ui/button"
import { Table, TableCell } from "@/app/components/ui/table"
import { H3 } from "@/app/components/ui/typography"
import { RawSheetRow } from "@/types/types"
import { useAtomValue } from "jotai"
import React, { useEffect, useState } from "react"

const RawSheet = () => {
  const rawSheet = useAtomValue(rawSheetAtom)
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  const steps = ["Idle", "SelectRow", "SelectSumCol", "Done"] as const
  const wizard = useWizard<(typeof steps)[number]>(steps)

  if (!rawSheet) return

  return (
    <>
      {wizard.current() === "SelectRow" && <H3>Select your header row</H3>}
      {wizard.current() === "SelectSumCol" && <H3>Select your value col. </H3>}

      <div className="flex justify-between mt-6 mb-12">
        <Button onClick={() => wizard.prev()}>Prev</Button>
        <Button onClick={() => wizard.next()}>Next</Button>
      </div>

      <Table>
        {rawSheet.map((row: RawSheetRow, i: number) => (
          <TableRowSelect
            onClick={() => setSelectedRow((prev) => (prev === i ? null : i))}
            key={i}
            className={`${selectedRow === i ? "bg-blue-100 hover:bg-blue-100 font-bold" : ""} `}
          >
            {row.map((cell: string | number, j: number) => (
              <TableCell key={`${i}-${j}`}>{cell}</TableCell>
            ))}
          </TableRowSelect>
        ))}
      </Table>
    </>
  )
}

export { RawSheet }
