import { RawSheet } from "@/types/types"
import { atom } from "jotai"

export const rawSheetAtom = atom<RawSheet | null>(null)

export const headerRowAtom = atom<number | undefined>(undefined)
export const selectSumColAtom = atom<number | null>(null)

export const configAtom = atom((get) => ({
  header: get(headerRowAtom),
}))
