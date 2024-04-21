"use client"

import { RawSheetRow } from "@/types/types"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import React from "react"

const headerRows: string[] = ["test1header"]
const bodyRows: RawSheetRow[] = [["test1body", "test2body"]]

const Test = () => {
  return (
    <>
      <Table aria-label="Table">
        <TableHeader className="hidden">
          {headerRows?.map((cell: string | number, i: number) => (
            <TableColumn key={`${i}-${cell}`}>{cell}</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {bodyRows?.map((row: RawSheetRow, i: number) => {
            i = i + 4
            return (
              <TableRow key={i}>
                {row?.map((cell: string | number, j: number) => (
                  <TableCell key={`${i}-${j}`}>{cell}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default Test
