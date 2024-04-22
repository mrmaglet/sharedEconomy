import { configAtom, rawSheetAtom } from "@/app/(shared)/lib/store"
import { RawSheet } from "@/types/config-types"
import { useAtomValue } from "jotai"
import { Config } from "tailwindcss"

type ConfigProcessor = {
  stripFirstNrRows: () => ConfigProcessor // Return type is ConfigProcessor itself
  getValue: () => RawSheet
}

const useConfig = () => {
  const rawSheet = useAtomValue(rawSheetAtom)
  const config = useAtomValue(configAtom)

  function processConfig(): ConfigProcessor {
    let value: RawSheet = rawSheet || []

    /**
     * Strips everything before the defined header row.
     */
    function stripFirstNrRows(this: ConfigProcessor): ConfigProcessor {
      value = value.filter((row, i) => config.header && i >= config.header && row)
      return this
    }

    function getValue(): RawSheet {
      return value
    }

    return {
      stripFirstNrRows,
      getValue,
    }
  }

  return { processConfig }
}

export { useConfig }
