import { Configuration, Filter, SheetConfig } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { atom } from "jotai"
import { focusAtom } from "jotai-optics"
import { unescape } from "querystring"

export const rawSheetAtom = atom<RawSheet | null>(null)
export const headerRowAtom = atom<number | undefined>(undefined)
export const selectSumColAtom = atom<number | null>(null)
export const configNameAtom = atom<string>("")

export const configAtom = atom<Configuration>((get) => ({
  name: "",
  sheetConfigs: get(sheetConfigAtom),
}))

export const sheetConfigAtom = atom<SheetConfig[]>((get) => [
  {
    name: "",
    file: [],
    header: undefined,
    valueColumn: null,
    filters: get(filterAtom),
  },
])

export const filterAtom = atom<Filter[]>([])

const defaultConfiguration: Configuration = {
  name: "",
  sheetConfigs: [
    {
      name: "",
      file: [],
      header: undefined,
      valueColumn: null,
      filters: [],
    },
  ],
}

const baseConfig = atom<Configuration>(defaultConfiguration)

export const addSheetDataAtom = atom(null, (_get, set, sheetData: RawSheet) => {
  const result = set(baseConfig, (prev) => {
    const result = prev.sheetConfigs.map((sheetConfig) => {
      return {
        ...sheetConfig,
        file: sheetData,
      }
    })

    return { ...prev, sheetConfigs: result }
  })
})

export const focusBaseConfigAtom = focusAtom(baseConfig, (optic) => optic.prop("sheetConfigs"))

const defaultFilter = {}

const config: Configuration = {
  name: "",
  sheetConfigs: [
    {
      name: "",
      file: [],
      header: 0,
      valueColumn: 0,
      filters: [
        {
          selectType: "column",
          column: 0,
          filterType: "start-with",
          filterText: "",
          action: "group",
          groupName: "",
        },
      ],
    },
  ],
}
