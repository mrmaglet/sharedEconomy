import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import React, { useState } from "react"

const PersonInputs = () => {
  const [person1, setPerson1] = useState("")
  const [person2, setPerson2] = useState("")

  const [person1Salary, setPerson1Salary] = useState<number | undefined>()
  const [person2Salary, setPerson2Salary] = useState<number | undefined>()

  return (
    <div>
      <div className="flex">
        <div>
          <Label>Person 1</Label>
          <Input type="text" value={person1} onChange={(e) => setPerson1(e.target.value)} />
        </div>
        <div>
          <Label>Lön</Label>
          <Input
            type="number"
            value={person1Salary}
            onChange={(e) => setPerson1Salary(Number(e.target.value) || undefined)}
          />
        </div>
      </div>

      <div className="flex">
        <div>
          <Label>Person 2 lön</Label>
          <Input type="text" value={person2} onChange={(e) => setPerson2(e.target.value)}></Input>
        </div>
        <div>
          <Label>Person 2 lön</Label>
          <Input
            type="number"
            value={person2Salary}
            onChange={(e) => setPerson2Salary(Number(e.target.value) || undefined)}
          ></Input>
        </div>
      </div>
    </div>
  )
}

export { PersonInputs }
