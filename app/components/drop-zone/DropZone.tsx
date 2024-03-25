interface Props {
  callback: (data: string | ArrayBuffer | null | undefined) => void
}

const DropZone = ({ callback }: Props) => {
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation()
    e.preventDefault()

    const droppedFile = e.dataTransfer.files[0]

    const reader = new FileReader()
    reader.readAsArrayBuffer(droppedFile)

    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (!e?.target?.result) return

      const file = e.target.result

      callback(file)
    }

    reader.onerror = function (e: ProgressEvent<FileReader>) {
      console.error("File could not be read!", e.target?.error)
    }
  }

  return (
    <div
      style={{ background: "red" }}
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
