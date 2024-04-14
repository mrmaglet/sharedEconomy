import { headerRowAtom, rawSheetAtom } from "@/app/(shared)/lib/store"
import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useAtomValue, useSetAtom } from "jotai"

const ConfigHeader = () => {
  const rawSheet = useAtomValue(rawSheetAtom)

  const setHeaderRow = useSetAtom(headerRowAtom)

  if (!rawSheet) return

  const headerRow = rawSheet?.[0]

  return (
    <>
      <h2>Select your header row</h2>

      <Table
        aria-label="Controlled table example with dynamic content"
        hideHeader
        selectionMode="single"
        color={"primary"}
        onSelectionChange={(e: any) => setHeaderRow(e.anchorKey)}
      >
        <TableHeader className="hidden">
          {headerRow.map((cell: string | number, i: number) => (
            <TableColumn key={i}>&nbsp;</TableColumn>
          ))}
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

export { ConfigHeader }
