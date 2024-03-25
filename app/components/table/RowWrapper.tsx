import { PropsWithChildren } from "react"

const RowWrapper = ({ children }: PropsWithChildren<object>) => {
  return <div style={{ display: "flex", gap: "2rem" }}>{children}</div>
}

export { RowWrapper }
