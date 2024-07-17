import React, { Key, PropsWithChildren } from "react"
import {
  Dropdown,
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  DropdownMenuProps,
} from "@nextui-org/react"
import ListChecks from "@/icons/ListChecksIcon"
import RowsIcon from "@/icons/RowsIcon"
import { useSetAtom } from "jotai"
import { setConfigSelectTypeAtom } from "@/app/(shared)/lib/store"
import { SelectType, SELECT_TYPE } from "@/types/config-types"

const AddFilterDropDown = () => {
  const setConfigSelectType = useSetAtom(setConfigSelectTypeAtom)

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="solid" color="secondary">
          Add filter +
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        onAction={(e) => {
          setConfigSelectType(e as SelectType)
        }}
        variant="faded"
        aria-label="Dropdown menu with description"
        itemClasses={{
          description: ["whitespace-nowrap"],
        }}
      >
        <DropdownItem
          key={SELECT_TYPE.column}
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
          key={SELECT_TYPE.multiSelect}
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
