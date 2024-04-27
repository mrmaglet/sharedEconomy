import { Configuration, Filter, SheetConfig } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { atom } from "jotai"

export const rawSheetAtom = atom<RawSheet | null>(null)

export const headerRowAtom = atom<number | undefined>(undefined)
export const selectSumColAtom = atom<number | null>(null)
export const configNameAtom = atom<string>("")

export const configAtom = atom<Configuration>((get) => ({
  name: get(configNameAtom),
  sheetConfigs: get(sheetConfigAtom),
}))

// header: get(headerRowAtom),
//   valueColumn: get(selectSumColAtom),

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

console.log(config)
