"use client"

import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { useWizard } from "@/app/(shared)/lib/useWizard"
import { Button } from "@nextui-org/react"

import { useAtomValue } from "jotai"
import React, { useState } from "react"
import { ConfigHeader } from "@/app/(shared)/components/config/ConfigHeader"
import { ConfigValueCol } from "@/app/(shared)/components/config/ConfigValueCol"
import { ConfigFilters } from "@/app/(shared)/components/config/ConfigFilters"

const Config = () => {
  const rawSheet = useAtomValue(rawSheetAtom)

  const steps = ["SelectRow", "SelectSumCol", "Filters"] as const
  const wizard = useWizard<(typeof steps)[number]>(steps)

  if (!rawSheet) return

  return (
    <>
      <div className="flex justify-between mt-6 mb-12">
        <Button onClick={() => wizard.prev()} color="primary">
          Prev
        </Button>

        <Button onClick={() => wizard.next()} color="primary">
          Next
        </Button>
      </div>

      {wizard.current() === "SelectRow" && <ConfigHeader />}
      {wizard.current() === "SelectSumCol" && <ConfigValueCol />}
      {wizard.current() === "Filters" && <ConfigFilters />}
    </>
  )
}

export { Config }
