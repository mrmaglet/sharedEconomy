import { Filters } from "@/app/(shared)/components/config/Filters/Filters"
import { useConfig } from "@/app/(shared)/lib/useConfig"
import { RawSheetRow } from "@/types/types"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
} from "@nextui-org/react"
import React from "react"

const ConfigFilters = () => {
  const { processConfig } = useConfig()
  const filteredSheet = processConfig().stripFirstNrRows().getValue()

  if (filteredSheet.length === 0) return null

  const [firstRow, ...bodyRows] = filteredSheet

  return (
    <>
      <h2>Add groups</h2>

      <Filters />

      <Table>
        <TableHeader>
          {firstRow.map((cell: string | number, i: number) => (
            <TableColumn key={`${i}-${cell}`}>{cell}</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {bodyRows.map((row: RawSheetRow, i: number) => (
            <TableRow key={i}>
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

export { ConfigFilters }
