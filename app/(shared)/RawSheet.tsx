"use client"

import { AddLabels } from "@/app/(shared)/AddLabels"
import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { useWizard } from "@/app/(shared)/lib/useWizard"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

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

    props = {
      className: `
      hover:bg-[unset] ${selectedRow === row && "bg-blue-100 font-bold hover:bg-blue-100"} `,
    }
    return props
  }

  const getCellProps = (row: number, col: number) => {
    let props: React.TdHTMLAttributes<HTMLTableCellElement>

    const handleMouseIn = (row: number, col: number) => {
      if (selectedRow == null) return

      if (row >= selectedRow) setHoverPos([row, col])
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
        className: `break-keep whitespace-nowrap ${
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
      className: `break-keep whitespace-nowrap ${
        selectSumCol === col && selectedRow && row >= selectedRow ? "bg-amber-100" : ""
      }`,
    }
    return props
  }

  if (!rawSheet) return

  return (
    <>
      {wizard.current() === "SelectRow" && <h2>Select your header row</h2>}
      {wizard.current() === "SelectSumCol" && <h2>Select your value col. </h2>}
      {wizard.current() === "Done" && <h2>Add groups</h2>}

      {wizard.current() === "Done" && <AddLabels />}

      <div className="flex justify-between mt-6 mb-12">
        <button onClick={() => wizard.prev()}>Prev</button>
        <button onClick={() => wizard.next()}>Next</button>
      </div>

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
            <TableRow key={i} {...getRowProps(i)}>
              {row.map((cell: string | number, j: number) => (
                <TableCell {...getCellProps(i, j)} key={`${i}-${j}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export { RawSheet }
