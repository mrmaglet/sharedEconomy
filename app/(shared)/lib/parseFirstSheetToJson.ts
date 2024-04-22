import { RawSheet } from "@/types/types"
import { read, utils } from "xlsx"

/**
 * Use raw data from the Drop Zone to parse the first sheet to JSON.
 */
export const parseFirstSheetToJson = (file: ArrayBuffer) => {
  //
  try {
    const parsedData = read(file)
    const firstSheet = parsedData.Sheets[parsedData.SheetNames[0]]

    const data: RawSheet = utils.sheet_to_json(firstSheet, { header: 1, defval: "" })

    return { success: true, data }
  } catch (error) {
    return { success: false, data: null }
  }
}
