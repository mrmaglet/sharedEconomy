import React from "react"
import { Dropdown, Button, DropdownMenu, DropdownItem, DropdownTrigger } from "@nextui-org/react"
import ListChecks from "@/icons/ListChecksIcon"
import RowsIcon from "@/icons/RowsIcon"

const AddFilterDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="solid" color="secondary">
          Add filter +
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        itemClasses={{
          description: ["whitespace-nowrap"],
        }}
      >
        <DropdownItem
          key="new"
          shortcut="⌘N"
          description={
            <>
              Group based on content in <br />a specific column
            </>
          }
          startContent={<RowsIcon style={{ width: "96px", height: "auto", color: "silver" }} />}
        >
          Column filter
        </DropdownItem>

        <DropdownItem
          key="copy"
          shortcut="⌘C"
          description="Multiselect individual rows"
          startContent={<ListChecks style={{ width: "96px", height: "auto", color: "silver" }} />}
        >
          Select rows
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export { AddFilterDropDown }
