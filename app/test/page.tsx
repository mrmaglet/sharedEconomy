"use client"

import { SubComponent } from "@/app/test/SubComponent"
import { myActor } from "@/app/test/logic"
import { useSelector } from "@xstate/react"
import { useEffect } from "react"

const Test = () => {
  // Read the actor's snapshot
  const count = useSelector(myActor, (state) => state.context.count)

  useEffect(() => {
    myActor.start()
  }, [myActor])

  type Shape = "circle" | "square" | "triangle"

  function getArea(shape: Shape): number {
    switch (shape) {
      case "circle":
        return Math.PI * Math.pow(2, 2) // Assume radius = 2
      case "square":
        return Math.pow(2, 2) // Assume side length = 2
      case "triangle":
        return (2 * 2) / 2 // Assume base = 2 and height = 2
      default:
        return assertNever(shape)
    }
  }

  function assertNever(value: never): never {
    console.log("Encountered unexpected value:", value)
    throw new Error(`Unexpected value: ${value}`)
  }

  // Example usage:
  console.log(getArea("circle")) // Valid case
  console.log(getArea("square")) // Valid case
  console.log(getArea("triangle2")) // Valid case

  // This line will cause a TypeScript error, demonstrating the never type
  // getArea("hexagon"); // Uncommenting this will cause a TypeScript error

  return (
    <>
      {/* // Send events to the actor */}
      <button onClick={() => myActor.send({ type: "inc" })}>Count: {count}</button>

      <SubComponent />
    </>
  )
}

export default Test
