import { cn } from "@/lib/utils"

interface Props {
  callback: (data: ArrayBuffer) => void
  className?: string
}

const DropZone = ({ callback, className }: Props) => {
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation()
    e.preventDefault()

    const droppedFile = e.dataTransfer.files[0]

    const reader = new FileReader()
    reader.readAsArrayBuffer(droppedFile)

    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (!e?.target?.result) return

      const file = e.target.result

      if (file.constructor === ArrayBuffer) callback(file) //
    }

    reader.onerror = function (e: ProgressEvent<FileReader>) {
      console.error("File could not be read!", e.target?.error)
    }
  }

  return (
    <div
      className={cn("border-gray-200 border-2 border-dotted bg-sky-100 p-4 rounded-md", className)}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      Drop <br /> Zone
    </div>
  )
}

export { DropZone }
