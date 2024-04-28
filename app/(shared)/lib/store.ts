import { Configuration, Filter, SheetConfig } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { atom } from "jotai"

// export const rawSheetAtom = atom<RawSheet | null>(null)
// export const headerRowAtom = atom<number | undefined>(undefined)
// export const selectSumColAtom = atom<number | null>(null)
// export const configNameAtom = atom<string>("")

export const currentSheetAtom = atom(0)

export const configAtom = atom<Configuration>((get) => ({
  name: "",
  sheetConfigs: get(sheetConfigAtom),
}))

export const sheetConfigAtom = atom<SheetConfig[]>((get) => [
  {
    name: "",
    file: [],
    header: 0,
    valueColumn: 0,
    filters: get(filterAtom),
  },
])

export const filterAtom = atom<Filter[]>([])

const defaultConfig: Configuration = {
  name: "",
  sheetConfigs: null,
}

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
