import {
  person1Atom,
  person1SalaryAtom,
  person2Atom,
  person2SalaryAtom,
} from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { roundToInteger, sumTransactions } from "@/lib/transactions-utils"
import { useAtom, useAtomValue } from "jotai"
import React from "react"

const ShareResults = () => {
  const [person1, setPerson1] = useAtom(person1Atom)
  const [person2, setPerson2] = useAtom(person2Atom)
  const [person1Salary, setPerson1Salary] = useAtom(person1SalaryAtom)
  const [person2Salary, setPerson2Salary] = useAtom(person2SalaryAtom)
  // TODO: Refactor. This is a temp solution for compatibility with the old code.
  const transactions = useAtomValue(rawSheetAtom)

  const CalculateShare = (total_bill: number, person1_salary: number, person2_salary: number) => {
    const total_salary = person1_salary + person2_salary

    const person1_share = (person1_salary / total_salary) * total_bill
    const person2_share = (person2_salary / total_salary) * total_bill

    return { person1: person1_share, person2: person2_share }
  }

  const shareResult = {
    person1: false,
    person2: false,
  }

  // CalculateShare(
  //   sumTransactions(
  //     [0, 0]
  //     transactions.filter(
  //       (transaction) => transaction.labels === "Dela Ani" || transaction.labels === "Dela Magnus"
  //     )
  //   ) || 0,
  //   person1Salary || 0,
  //   person2Salary || 0
  // )

  return (
    <>
      <div className="mt-8 flex flex-col">
        <div>
          {person1 || "Person 1"} should pay: {/* @ts-expect-error */}
          {roundToInteger(shareResult?.person1 || "Not implemented")}
        </div>
        <div>
          {person2 || "Person 2"} should pay: {/* @ts-expect-error */}
          {roundToInteger(shareResult?.person2 || "Not implemented")}
        </div>
      </div>
    </>
  )
}

export { ShareResults }
