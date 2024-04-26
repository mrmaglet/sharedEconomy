import { Configuration, SheetFile } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { atom } from "jotai"

export const rawSheetAtom = atom<RawSheet | null>(null)

export const headerRowAtom = atom<number | undefined>(undefined)
export const selectSumColAtom = atom<number | null>(null)
export const configNameAtom = atom<string>("")
export const filesAtom = atom<SheetFile[]>([])

export const configAtom = atom<Configuration>((get) => ({
  name: get(configNameAtom),
  files: get(filesAtom),
}))

// header: get(headerRowAtom),
//   valueColumn: get(selectSumColAtom),
