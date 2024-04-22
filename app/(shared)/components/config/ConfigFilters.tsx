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

      <div>
        <Select label="Select a column" labelPlacement="outside" className="max-w-xs">
          <SelectItem value="" key="">
            None
          </SelectItem>
          <SelectItem value="Date" key="Date">
            Date
          </SelectItem>
          <SelectItem value="Card" key="Card">
            Card
          </SelectItem>
          <SelectItem value="Card number" key="Card number">
            Card Number
          </SelectItem>
        </Select>

        <Select label="Select type" labelPlacement="outside" className="max-w-xs">
          <SelectItem value="column" key="column">
            Equals
          </SelectItem>
          <SelectItem value="column" key="column">
            Contains
          </SelectItem>
          <SelectItem value="column" key="column">
            Starts with
          </SelectItem>
        </Select>

        <Select label="Content of exact value" labelPlacement="outside" className="max-w-xs">
          <SelectItem value="column" key="column">
            Huvudkort
          </SelectItem>
          <SelectItem value="column" key="column">
            Extrakort
          </SelectItem>
        </Select>
      </div>

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
