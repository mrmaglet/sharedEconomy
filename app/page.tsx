"use client"

import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"
import {
  addSheetDataAtom,
  configAtom,
  focusBaseConfigAtom,
  sheetConfigAtom,
} from "@/app/(shared)/lib/store"
import { Card } from "@nextui-org/react"
import { Config } from "@/app/(shared)/components/config/Config"
import { parseFirstSheetToJson } from "@/app/(shared)/lib/parseFirstSheetToJson"
import { useAtomsDevtools } from "jotai-devtools"

const Page = () => {
  const [focusBaseConfig, setFocusBaseConfig] = useAtom(focusBaseConfigAtom)

  const addSheetData = useSetAtom(addSheetDataAtom)

  useAtomsDevtools("test")

  console.log(focusBaseConfig)

  const onFileDropped = (file: ArrayBuffer) => {
    const parsedFile = parseFirstSheetToJson(file)

    if (parsedFile !== null) addSheetData(parsedFile)
  }

  return (
    <>
      <div className="container my-10">
        <DropZone callback={onFileDropped} className="mb-8" />

        <Card className="p-10">
          <PersonInputs />

          <ShareResults />
        </Card>

        <br />

        <Config />
      </div>
    </>
  )
}

export default Page
