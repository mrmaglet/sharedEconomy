"use client"

import { Input } from "@nextui-org/react"
import { atom, useAtom } from "jotai"
import React, { useState } from "react"

export const person1Atom = atom("")
export const person2Atom = atom("")
export const person1SalaryAtom = atom<number | undefined>(undefined)
export const person2SalaryAtom = atom<number | undefined>(undefined)

const PersonInputs = () => {
  const [person1, setPerson1] = useAtom(person1Atom)
  const [person2, setPerson2] = useAtom(person2Atom)
  const [person1Salary, setPerson1Salary] = useAtom(person1SalaryAtom)
  const [person2Salary, setPerson2Salary] = useAtom(person2SalaryAtom)

  return (
    <div className="flex gap-y-4 flex-col">
      <div className="flex gap-x-4">
        <div>
          <label>Person 1</label>
          <Input type="text" value={person1} onChange={(e) => setPerson1(e.target.value)} />
        </div>

        <div>
          <label>Lön</label>
          <Input
            type="number"
            value={person1Salary || ""}
            onChange={(e) => setPerson1Salary(Number(e.target.value) || undefined)}
          />
        </div>
      </div>

      <div className="flex flex gap-x-4">
        <div>
          <label>Person 2</label>
          <Input type="text" value={person2} onChange={(e) => setPerson2(e.target.value)} />
        </div>

        <div>
          <label>Lön</label>
          <Input
            type="number"
            value={person2Salary || ""}
            onChange={(e) => setPerson2Salary(Number(e.target.value) || undefined)}
          />
        </div>
      </div>
    </div>
  )
}

export { PersonInputs }
