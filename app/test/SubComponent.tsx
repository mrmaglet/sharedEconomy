"use client"

import { myActor } from "@/app/test/logic"
import { useSelector } from "@xstate/react"
import Link from "next/link"
import React from "react"

const SubComponent = () => {
  const count = useSelector(myActor, (state) => state.context.count)

  return (
    <div>
      Subcomponent: {count} <Link href="/">Home</Link>
    </div>
  )
}

export { SubComponent }
