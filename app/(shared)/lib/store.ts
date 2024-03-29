import { Transaction } from "@/types/types"
import { atom } from "jotai"

export const transactionsAtom = atom<Transaction[]>([])
