import { RawSheet, Transaction } from "@/types/types"
import { atom } from "jotai"

export const rawSheetAtom = atom<RawSheet | null>(null)

export const transactionsAtom = atom<Transaction[]>([])
