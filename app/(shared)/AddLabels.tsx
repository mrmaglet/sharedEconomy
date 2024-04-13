import React from "react"
import { Select, SelectItem } from "@nextui-org/react"

const AddLabels = () => {
  return (
    <div>
      <Select label="Select a column" labelPlacement="outside" className="max-w-xs">
        <SelectItem value="" key="">
          None
        </SelectItem>
        <SelectItem value="Date" key="Date">
          Date
        </SelectItem>
        <SelectItem value="Card" key="Card">
          Card
        </SelectItem>
        <SelectItem value="Card number" key="Card number">
          Card Number
        </SelectItem>
      </Select>

      <Select label="Select type" labelPlacement="outside" className="max-w-xs">
        <SelectItem value="column" key="column">
          Equals
        </SelectItem>
        <SelectItem value="column" key="column">
          Contains
        </SelectItem>
        <SelectItem value="column" key="column">
          Starts with
        </SelectItem>
      </Select>

      <Select label="Content of exact value" labelPlacement="outside" className="max-w-xs">
        <SelectItem value="column" key="column">
          Huvudkort
        </SelectItem>
        <SelectItem value="column" key="column">
          Extrakort
        </SelectItem>
      </Select>
    </div>
  )
}

export { AddLabels }
