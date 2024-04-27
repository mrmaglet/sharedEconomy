import { RawSheet } from "@/types/types"

/**
 * Configure filters and settings for a dropped file.
 */
export type Configuration = {
  name: string
  sheetConfigs: SheetConfig[]
}

export type SheetConfig = {
  name: string
  file: RawSheet
  header: number | undefined
  valueColumn: number | null
  filters: Filter[]
}

export type Filter = ColumnFilter | MultiSelectFilter

// # Column filter
type ColumnFilter = {
  selectType: Extract<SelectType, "column">
  column: number
} & (TextFilter | (SelectFilter & (ActionDelete | ActionGroup)))

// # Column filter BASE
// type ColumnFilter = {
//   selectType: Extract<SelectType, "column">
//   column: number
// } & (TextFilter | SelectFilter) &
//   (ActionDelete | ActionGroup)

type TextFilter = {
  filterType: Extract<FilterType, "start-with" | "contains" | "end-with">
  filterText: string
}

type SelectFilter = {
  filterType: Extract<FilterType, "equals">
  selectedRow: number
}

// # Multi select filter
type MultiSelectFilter = {
  selectType: Extract<SelectType, "multi-select">
  selectedRows: number[]
  type: "permanent-fixed" | "dynamically-hand-picked"
} & (ActionDelete | ActionGroup)

// # Helpers

type ActionDelete = {
  action: Extract<FilterAction, "delete">
}

type ActionGroup = {
  action: Extract<FilterAction, "group">
  groupName: string
}

type SelectType = "column" | "multi-select"
type FilterType = "start-with" | "contains" | "end-with" | "equals"
type FilterAction = "group" | "delete"
