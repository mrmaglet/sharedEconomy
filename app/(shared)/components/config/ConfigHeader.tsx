import {
  activeSheetAtom,
  headerRowAtom,
  presentConfigAtom,
  presentSheetConfigAtom,
  rawSheetAtom,
  setConfigSheetHeaderAtom,
} from "@/app/(shared)/lib/store"
import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useAtomValue, useSetAtom } from "jotai"

const ConfigHeader = () => {
  const presentSheetConfig = useAtomValue(presentSheetConfigAtom)
  const activeSheet = useAtomValue(activeSheetAtom)

  const setHeaderRow = useSetAtom(headerRowAtom)
  const setConfigSheetHeader = useSetAtom(setConfigSheetHeaderAtom)

  const tableHeaderRow = presentSheetConfig[activeSheet].sheetRows[0]

  return (
    <>
      <h2>Select your header row</h2>

      <Table
        aria-label="Table"
        hideHeader
        selectionMode="single"
        color="primary"
        onSelectionChange={(e: any) => setConfigSheetHeader(e.anchorKey)}
      >
        <TableHeader className="hidden">
          {tableHeaderRow.map((cell: string | number, i: number) => (
            <TableColumn key={i}>&nbsp;</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {presentSheetConfig[activeSheet].sheetRows.map((row: RawSheetRow, i: number) => (
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

export { ConfigHeader }
