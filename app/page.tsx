"use client"

import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"
import {
  addConfigSheetAtom,
  addSheetDataAtom,
  configAtom,
  configSheetAtom,
  focusBaseConfigAtom,
  sheetConfigAtom,
} from "@/app/(shared)/lib/store"
import { Card } from "@nextui-org/react"
import { Config } from "@/app/(shared)/components/config/Config"
import { parseFirstSheetToJson } from "@/app/(shared)/lib/parseFirstSheetToJson"
import { useAtomsDevtools } from "jotai-devtools"
import { useAtomDevtools } from "jotai-devtools"

const Page = () => {
  const [focusBaseConfig, setFocusBaseConfig] = useAtom(focusBaseConfigAtom)

  const addSheetData = useSetAtom(addSheetDataAtom)
  const configSheet = useAtomValue(configSheetAtom)
  const setConfigSheet = useSetAtom(configSheetAtom)

  const addConfigSheet = useSetAtom(addConfigSheetAtom)

  console.log(configSheet)

  useAtomDevtools(configSheetAtom)

  console.log(focusBaseConfig)

  const onFileDropped = (file: ArrayBuffer) => {
    const parsedFile = parseFirstSheetToJson(file)

    if (parsedFile !== null) {
      // addSheetData(parsedFile)
      console.log("set value: ", parsedFile)

      // setConfigSheet((prev) => [
      //   ...prev,
      //   {
      //     name: "Sheet 1",
      //     file: parsedFile,
      //     header: 1,
      //     valueColumn: null,
      //     filters: [],
      //   },
      // ])

      addConfigSheet({
        name: "Sheet 1",
        file: parsedFile,
        header: 1,
        valueColumn: null,
        filters: [],
      })
      addConfigSheet({
        name: "Sheet 2",
        file: parsedFile,
        header: 1,
        valueColumn: null,
        filters: [],
      })
    }
  }

  return (
    <>
      <div className="container my-10">
        <DropZone callback={onFileDropped} className="mb-8" />

        <Card className="p-10">
          <PersonInputs />

          <ShareResults />
        </Card>

        {configSheet?.[0]?.file}

        <br />

        <Config />
      </div>
    </>
  )
}

export default Page
