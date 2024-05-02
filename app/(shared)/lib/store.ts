import { Configuration, SheetConfig } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { atom } from "jotai"
import { focusAtom } from "jotai-optics"

export const rawSheetAtom = atom<RawSheet | null>(null)
export const headerRowAtom = atom<number | undefined>(undefined)
export const selectSumColAtom = atom<number | null>(null)
export const configNameAtom = atom<string>("")

const configAtom = atom<Configuration>({
  name: "",
  sheetConfigs: [],
})

export const activeSheetAtom = atom(0)

export const presentConfigAtom = atom<Configuration>((get) => get(configAtom))

const presentSheetConfigFocus = focusAtom(configAtom, (optic) => optic.prop("sheetConfigs"))
export const presentSheetConfigAtom = atom<SheetConfig[]>((get) => get(presentSheetConfigFocus))

export const configSheetAtom = focusAtom(configAtom, (optic) => optic.prop("sheetConfigs"))

export const addConfigSheetAtom = atom(null, (_get, set, sheetRows: RawSheet) => {
  set(configSheetAtom, (prev) => [
    ...prev,
    { name: "", sheetRows, header: undefined, valueColumn: null, filters: [] },
  ])
})

export const setConfigSheetHeaderAtom = atom(null, (get, set, header: number) => {
  set(configSheetAtom, (prev) => {
    const sheetConfig = prev[get(activeSheetAtom)]
    return [{ ...sheetConfig, header }]
  })
})

const config: Configuration = {
  name: "",
  sheetConfigs: [
    {
      name: "",
      sheetRows: [],
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
