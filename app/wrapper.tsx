"use client"

import { useState } from "react"
import { Button } from "./button"

export function Wrapper({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0)

  return (
    <div className="p-8 space-y-4 border-2 border-sky-500 m-4">
      <p>
        <code>&lt;Wrapper /&gt;</code> is a client component that is included in
        the root layout, which wraps every page component. I've included a
        counter to show the usage of <code>useState</code>, a client-side
        function.
      </p>
      <div className="flex flex-row items-center justify-start space-x-4">
        <p>
          Value of <code>counter</code>: {counter}
        </p>
        <Button onClick={() => setCounter(counter => counter + 1)}>
          Increment
        </Button>
        <Button onClick={() => setCounter(counter => counter - 1)}>
          Decrement
        </Button>
      </div>

      <div className="mt-8">{children}</div>
    </div>
  )
}
