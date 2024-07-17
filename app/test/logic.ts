"use client"

import { setup, createActor, createMachine, assign } from "xstate"
import { useSelector } from "@xstate/react"

// Global app logic
const countMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgMwG0AGAXUVAAcB7WXAF1yf3pAA9EATAA4AdAGYA7AEYhEgKxyhAmULFCANCACeiKQIC+hzfiYQ4PNFjyEiPZqw5ce-BFImadrqVJFU5VALcAFgkANiolMUNDIA */
  context: { count: 0 },
  on: {
    inc: {
      actions: assign({ count: ({ context }) => context.count + 1 }),
    },
  },
})

// Global actor - an instance of the app logic
export const myActor = createActor(countMachine)
// myActor.start() // Starts the actor immediately
