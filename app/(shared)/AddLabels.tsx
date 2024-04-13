import React from "react"

const AddLabels = () => {
  return (
    <div>
      Column{" "}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <select>
        <option value="column">Date</option>
        <option value="column">Card</option>
        <option value="column">Card Number</option>
      </select>
      <select>
        <option value="column">Equals</option>
        <option value="column">Contains</option>
        <option value="column">Starts with</option>
      </select>
      <select>
        <option value="column">Huvudkort</option>
        <option value="column">Extrakort</option>
      </select>
      <Input type="text" />
    </div>
  )
}

export { AddLabels }
