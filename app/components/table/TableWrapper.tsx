import { PropsWithChildren } from "react"

const TableWrapper = ({ children }: PropsWithChildren<object>) => {
  return <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
}

export { TableWrapper }
