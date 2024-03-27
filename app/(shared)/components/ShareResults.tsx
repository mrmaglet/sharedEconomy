import {
  person1Atom,
  person1SalaryAtom,
  person2Atom,
  person2SalaryAtom,
} from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { useAtom } from "jotai"
import React from "react"

const ShareResults = () => {
  const [person1, setPerson1] = useAtom(person1Atom)
  const [person2, setPerson2] = useAtom(person2Atom)
  const [person1Salary, setPerson1Salary] = useAtom(person1SalaryAtom)
  const [person2Salary, setPerson2Salary] = useAtom(person2SalaryAtom)

  return <></>
}

export { ShareResults }
