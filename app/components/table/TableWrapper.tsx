import { PropsWithChildren } from "react"

const TableWrapper = ({ children }: PropsWithChildren<object>) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>{children}</div>
  )
}

export { TableWrapper }
