import { configAtom, headerRowAtom, rawSheetAtom } from "@/app/(shared)/lib/store"
import { useConfig } from "@/app/(shared)/lib/useConfig"
import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useAtomValue, useSetAtom } from "jotai"
import React, { useState } from "react"

const ConfigValueCol = () => {
  const rawSheet = useAtomValue(rawSheetAtom)
  const headerRow = useAtomValue(headerRowAtom)

  const config = useAtomValue(configAtom)

  const { processConfig } = useConfig()

  const filteredSheet = processConfig().stripFirstNrRows().getValue()

  console.log("config", config)
  console.log("headerRow", headerRow)

  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  const [selectSumCol, setSelectSumCol] = useState<number | null>(null)
  const [hoverPos, setHoverPos] = useState<[number, number] | null>(null)

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

  if (!rawSheet) return

  // TODO: extract first row and spread the rest.
  const firstRow = filteredSheet?.[0]

  return (
    <>
      <h2>Select your value col. </h2>

      <Table aria-label="Table">
        <TableHeader className="hidden">
          {firstRow.map((cell: string | number, i: number) => (
            <TableColumn key={`${i}-${cell}`}>{cell}</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {filteredSheet.map((row: RawSheetRow, i: number) => {
            i = i + 4
            return (
              <TableRow key={i}>
                {row.map((cell: string | number, j: number) => (
                  <TableCell {...getCellProps(i, j)} key={`${i}-${j}`}>
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
