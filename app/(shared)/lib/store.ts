import { RawSheet, Transaction } from "@/types/types"
import { atom } from "jotai"

export const rawSheetAtom = atom<RawSheet | null>(null)

/** Deprecated */
export const transactionsAtom = atom<Transaction[]>([])

export const headerRowAtom = atom<number | undefined>(undefined)

export const configAtom = atom((get) => ({
  header: get(headerRowAtom),
}))
