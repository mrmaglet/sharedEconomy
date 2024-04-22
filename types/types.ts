/**
 * Parsed json from excel file
 */
export type RawSheet = RawSheetRow[]
export type RawSheetRow = (string | number)[]

/**
 * Config
 */
type Config = {
  name: string
  files: Files[]
}

type Files = {
  name: string
  file: RawSheet
  header: number | undefined
}
