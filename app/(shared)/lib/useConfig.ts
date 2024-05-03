import { Configuration, SheetConfig } from "@/types/config-types"
import { RawSheet } from "@/types/types"
import { useAtomValue } from "jotai"
import { Config } from "tailwindcss"

type ConfigProcessor = {
  stripFirstNrRows: () => ConfigProcessor // Return type is ConfigProcessor itself
  getValue: () => RawSheet
}

const useConfig = (config: SheetConfig) => {
  function processConfig(): ConfigProcessor {
    let value: RawSheet = config.sheetRows

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
