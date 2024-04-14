import { rawSheetAtom } from "@/app/(shared)/lib/store"
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
import { useAtomValue } from "jotai"
import React, { useState } from "react"

const ConfigFilters = () => {
  const rawSheet = useAtomValue(rawSheetAtom)

  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  const [selectSumCol, setSelectSumCol] = useState<number | null>(null)
  const [hoverPos, setHoverPos] = useState<[number, number] | null>(null)

  if (!rawSheet) return

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
