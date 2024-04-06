import { TableRow } from "@/app/components/ui/table"
import React, { PropsWithChildren } from "react"

const TableRowSelect = ({
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableRowElement>>) => {
  return <TableRow {...props}>{children}</TableRow>
}

export { TableRowSelect }
