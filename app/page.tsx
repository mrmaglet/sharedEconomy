"use client"

import { useSetAtom } from "jotai"
import { DropZone } from "@/app/components/common/drop-zone/DropZone"
import { PersonInputs } from "@/app/(shared)/components/PersonInputs/PersonInputs"
import { ShareResults } from "@/app/(shared)/components/ShareResults"
import { rawSheetAtom } from "@/app/(shared)/lib/store"
import { Card } from "@nextui-org/react"
import { Config } from "@/app/(shared)/components/config/Config"
import { parseFirstSheetToJson } from "@/app/(shared)/lib/parseFirstSheetToJson"

const Page = () => {
  const setRawSheet = useSetAtom(rawSheetAtom)

  const onFileDropped = (file: ArrayBuffer) => {
    const parsedFile = parseFirstSheetToJson(file)

    if (parsedFile.success === false) alert("Failed to parse file!")

    setRawSheet(parsedFile.data)
  }

  return (
    <>
      <div className="container my-10">
        <DropZone callback={onFileDropped} className="mb-8" />

        <div className="absolute top-2 left-2 z-50">
          <div className="flex min-w-40 bg-slate-400">
            <div className="flex flex-row">
              <div className="flex-1">Image</div>
              <div className="flex">Some content goes beoynd its limits! </div>
              <div className="flex">K </div>
            </div>
          </div>
        </div>

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
