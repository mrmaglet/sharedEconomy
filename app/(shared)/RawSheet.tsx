"use client"

import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { useWizard } from "@/app/(shared)/lib/useWizard"
import { TableRowSelect } from "@/app/components/common/select-table/TableRowSelect"
import { Button } from "@/app/components/ui/button"
import { Table, TableCell } from "@/app/components/ui/table"
import { H3 } from "@/app/components/ui/typography"
import { RawSheetRow } from "@/types/types"
import { useAtomValue } from "jotai"
import React, { DOMAttributes, MouseEventHandler, use, useEffect, useState } from "react"

const RawSheet = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null)
  const [selectSumCol, setSelectSumCol] = useState<number | null>(null)
  const [hoverPos, setHoverPos] = useState<[number, number] | null>(null)

  const rawSheet = useAtomValue(rawSheetAtom)

  const steps = ["SelectRow", "SelectSumCol", "Done"] as const
  const wizard = useWizard<(typeof steps)[number]>(steps)

  const getRowProps = (row: number) => {
    let props: React.HTMLAttributes<HTMLTableRowElement> = {}

    if (wizard.current() === "SelectRow") {
      props = {
        className: `${
          selectedRow === row ? "bg-blue-100 hover:bg-blue-200 font-bold" : "hover:bg-blue-100"
        }`,
        onClick: () => setSelectedRow((prev) => (prev === row ? null : row)),
      }
      return props
    }

    // if (wizard.current() === "SelectSumCol") {
    // let props: React.HTMLAttributes<HTMLTableRowElement> = {}

    props = {
      className: `${selectedRow === row && "bg-blue-100 font-bold hover:bg-blue-100"}`,
    }
    return props
    // }
  }

  const getCellProps = (row: number, col: number) => {
    let props: React.TdHTMLAttributes<HTMLTableCellElement>

    const handleMouseIn = (row: number, col: number) => {
      if (selectedRow == null) return

      if (row >= selectedRow) {
        console.log("hovering over row")
        setHoverPos([row, col])
      }
    }

    const handleMouseOut = (e: React.MouseEvent<HTMLTableCellElement>) => {
      if (
        (e.relatedTarget && (e.relatedTarget as HTMLElement).nodeName === "DIV") ||
        (e.relatedTarget as HTMLElement).nodeName === "TABLE"
      ) {
        setHoverPos(null)
      }

      if (selectedRow && hoverPos && hoverPos[0] >= selectedRow) {
        setHoverPos(null)
      }
    }

    if (wizard.current() === "SelectSumCol") {
      props = {
        className: `${
          hoverPos?.[1] === col && selectedRow && row >= selectedRow ? "bg-amber-100" : ""
        } 
        ${selectSumCol === col && selectedRow && row >= selectedRow ? "bg-amber-100" : ""}
        ${
          selectSumCol === hoverPos?.[1] &&
          hoverPos?.[1] === col &&
          selectedRow &&
          row >= selectedRow
            ? "bg-amber-200"
            : ""
        }
        `,
        onMouseEnter: () => handleMouseIn(row, col),
        onMouseLeave: (e) => handleMouseOut(e),
        onClick: () => setSelectSumCol((prev) => (prev === col ? null : col)),
      }
      return props
    }

    props = {
      className: `${
        selectSumCol === col && selectedRow && row >= selectedRow ? "bg-amber-100" : ""
      }`,
    }
    return props
  }

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
        {rawSheet.map((row: RawSheetRow, i: number, arr) => (
          <TableRowSelect key={i} {...getRowProps(i)}>
            {row.map((cell: string | number, j: number) => (
              <TableCell {...getCellProps(i, j)} key={`${i}-${j}`}>
                {cell}
              </TableCell>
            ))}
          </TableRowSelect>
        ))}
      </Table>
    </>
  )
}

export { RawSheet }
