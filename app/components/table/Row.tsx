import { Col } from "@/types/types"
import { PropsWithChildren, CSSProperties } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  column: Col
}

const Row = ({ children, column }: PropsWithChildren<Props>) => {
  const styleMap: Record<Col, CSSProperties> = {
    firstCol: { flex: "0 0 auto" },
    secondCol: { flex: "1 0 auto", textAlign: "left" },
    thirdCol: { flex: "1 0 auto", textAlign: "right" },
  }

  return <div style={{ ...styleMap[column] }}>{children}</div>
}

export { Row }
