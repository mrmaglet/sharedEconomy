"use client"

import { useAtomValue, useSetAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"
import { configAtom, rawSheetAtom } from "@/app/(shared)/lib/store"
import { Card } from "@nextui-org/react"
import { Config } from "@/app/(shared)/components/config/Config"
import { parseFirstSheetToJson } from "@/app/(shared)/lib/parseFirstSheetToJson"

const Page = () => {
  const setRawSheet = useSetAtom(rawSheetAtom)

  const configuration = useAtomValue(configAtom)

  configuration.name = "Name"
  configuration.sheetConfigs = []
  configuration.sheetConfigs[0].name = "Sheet 1"
  configuration.sheetConfigs[0].filters[0].selectType = "column"

  if (configuration.sheetConfigs[0].filters[0].selectType === "column") {
    configuration.sheetConfigs[0].filters[0].action = "group"

    if (configuration.sheetConfigs[0].filters[0].action === "group") {
      configuration.sheetConfigs[0].filters[0].groupName = "Group Name"
    }
  }

  const onFileDropped = (file: ArrayBuffer) => {
    const parsedFile = parseFirstSheetToJson(file)

    if (parsedFile.success === false) alert("Failed to parse file!")

    setRawSheet(parsedFile.data)
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
