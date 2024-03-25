import { Col } from "@/types/types"
import { PropsWithChildren, CSSProperties } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  column: Col
}

const Row = ({ children, column }: PropsWithChildren<Props>) => {
  const styleMap: Record<string, CSSProperties> = {
    first: { flex: "0 0 auto" },
    second: { flex: "1 0 auto", textAlign: "left" },
    third: { flex: "1 0 auto", textAlign: "right" },
  }

  return <div style={{ ...styleMap[column] }}>{children}</div>
}

export { Row }
