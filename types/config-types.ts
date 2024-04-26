import { RawSheet } from "@/types/types"

/**
 * Configure filters and settings for a dropped file.
 */
export type Configuration = {
  name: string
  files: SheetFile[]
}

export type SheetFile = {
  name: string
  file: RawSheet
  filters: Filter[]
}

type Filter =
  | ({
      header: number | undefined
      valueColumn: number
    } & ColumnFilter)
  | MultiSelectFilter

// # Column filter
type ColumnFilter = {
  SelectType: {
    selection: Extract<SelectType, "column">
    description: string
  }
  column: number
} & (TextFilter | SelectFilter | ActionDelete | ActionGroup)

type TextFilter = {
  SelectType: {
    selection: Extract<SelectType, "start-with" | "contains" | "end-with">
    description: string
  }
  filterText: string
}

type SelectFilter = {
  filterType: Extract<FilterType, "equals">
  selectedRows: number[]
}

type ActionDelete = {
  action: Extract<FilterAction, "delete">
}

type ActionGroup = {
  action: Extract<FilterAction, "group">
  groupName: string
}

// # Multi select filter
type MultiSelectFilter = {
  SelectType: Extract<SelectType, "multi-select">
  selectedRows: number[]
  type: "permanent-fixed" | "dynamically-hand-picked"
}

// # Helpers
type SelectType = "column" | "multi-select"
type FilterType = "start-with" | "contains" | "end-with" | "equals"
type FilterAction = "group" | "delete"
