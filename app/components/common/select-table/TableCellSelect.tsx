import { TableCell } from "@/app/components/ui/table"
import { cn } from "@/lib/utils"
import React, { PropsWithChildren } from "react"

const TableCellSelect = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => {
  return (
    <TableCell
      className={cn("hover:bg-blue-50 break-keep whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </TableCell>
  )
}

export { TableCellSelect }
