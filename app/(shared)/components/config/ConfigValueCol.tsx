import {
  activeSheetAtom,
  configSheetValueColAtom,
  presentSheetsAtom,
} from "@/app/(shared)/lib/store"
import { useConfig } from "@/app/(shared)/lib/useConfig"
import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useAtom, useAtomValue } from "jotai"
import React, { useState } from "react"

const ConfigValueCol = () => {
  const activeSheet = useAtomValue(activeSheetAtom)
  const presentSheets = useAtomValue(presentSheetsAtom)

  const { processConfig } = useConfig(presentSheets[activeSheet])
  const filteredSheet = processConfig().stripFirstNrRows().getValue()

  const [valueCol, setValueCol] = useAtom(configSheetValueColAtom)

  const [hoverPos, setHoverPos] = useState<number | null>(null)

  const getCellProps = (col: number) => {
    let props: any

    const handleMouseIn = (col: number) => setHoverPos(col)

    const handleMouseOut = (e: React.MouseEvent<HTMLTableCellElement>) => {
      if (
        // Detect when leaving outer cells - special cases.
        (e.relatedTarget && (e.relatedTarget as HTMLElement).nodeName === "DIV") ||
        (e.relatedTarget as HTMLElement).nodeName === "TABLE"
      ) {
        setHoverPos(null)
      }
      setHoverPos(null)
    }

    props = {
      className: `break-keep whitespace-nowrap ${hoverPos === col ? "bg-[#F7F7F8]" : ""} 
        ${valueCol === col ? "bg-[#CCE2FC] text-primary" : ""}
        ${valueCol === hoverPos && hoverPos === col ? "bg-[#CCE2FC]" : ""}
        `,
      onMouseEnter: () => handleMouseIn(col),
      onMouseLeave: (e: any) => handleMouseOut(e),
      onClick: () => setValueCol(valueCol === col ? null : col),
    }

    return props
  }

  if (filteredSheet.length === 0) return null

  const [firstRow, ...bodyRows] = filteredSheet

  return (
    <>
      <h2>Select your value col. {valueCol} </h2>

      <Table aria-label="Table">
        <TableHeader className="hidden">
          {firstRow.map((cell: string | number, i: number) => (
            <TableColumn {...getCellProps(i)} key={`${i}-${cell}`}>
              {cell}
            </TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {bodyRows.map((row: RawSheetRow, i: number) => {
            return (
              <TableRow key={i}>
                {row.map((cell: string | number, j: number) => (
                  <TableCell {...getCellProps(j)} key={`${i}-${j}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export { ConfigValueCol }
