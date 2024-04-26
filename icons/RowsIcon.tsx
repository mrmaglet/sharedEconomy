import React from "react"

/**
 * https://phosphoricons.com
 */
function RowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z"></path>
      <rect
        width="176"
        height="56"
        x="40"
        y="144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="8"
      ></rect>
      <rect
        width="176"
        height="56"
        x="40"
        y="56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="8"
      ></rect>
    </svg>
  )
}

export default RowsIcon
