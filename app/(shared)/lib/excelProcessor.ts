"use client"

import { Labels } from "@/types/types"
import { read, utils } from "xlsx"

function processExcelFile(file: ArrayBuffer) {
  let value: any = file

  function getFirstSheet(this: any) {
    value = read(file)
    value = value.Sheets[value.SheetNames[0]]
    value = utils.sheet_to_json(value, { header: 1, defval: "" })

    return this
  }

  function stripFirstNrRows(this: any, nr: number) {
    value = value.filter((row: any, i: number) => i > nr && row)

    return this
  }

  function createColumns(this: any) {
    value = value.map((transfer: any) => {
      return {
        date: transfer[0],
        card: transfer[1],
        description: transfer[4],
        amount: transfer[5],
      }
    })

    return this
  }

  function setLabels(this: any) {
    value = value
      .map((format: any) => {
        let labels = ""

        if (format?.description?.startsWith("CRV*")) labels = "Magnus privat" as Labels
        else if (format.card === "Extrakort") labels = "Dela Ani" as Labels
        else if (format.card === "Huvudkort") labels = "Dela Magnus" as Labels

        return { ...format, labels }
      })
      .filter((format: any) => format.labels)

    return this
  }

  function getValue() {
    return value
  }

  return {
    getFirstSheet,
    stripFirstNrRows,
    createColumns,
    setLabels,
    getValue,
  }
}

export { processExcelFile }
