import { configAtom, rawSheetAtom } from "@/app/(shared)/lib/store"
import { RawSheet } from "@/types/types"
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

type ChainableFunction<T> = {
  add: (num: number) => ChainableFunction<T>
  subtract: (num: number) => ChainableFunction<T>
  multiply: (num: number) => ChainableFunction<T>
  divide: (num: number) => ChainableFunction<T>
  getValue: () => T
}

function createChainableFunction<T>(initialValue: T): ChainableFunction<T> {
  let value: T = initialValue

  return {
    add: function (num: number): ChainableFunction<T> {
      value = ((value as any) + num) as T
      return this
    },
    subtract: function (num: number): ChainableFunction<T> {
      value = ((value as any) - num) as T
      return this
    },
    multiply: function (num: number): ChainableFunction<T> {
      value = ((value as any) * num) as T
      return this
    },
    divide: function (num: number): ChainableFunction<T> {
      if (num === 0) {
        throw new Error("Cannot divide by zero")
      }
      value = ((value as any) / num) as T
      return this
    },
    getValue: function (): T {
      return value
    },
  }
}

const result = createChainableFunction(10).add(5).subtract(3).multiply(2).divide(4).getValue()

console.log(result) // Output: 4

export { useConfig }

// type ChainableFunction<T> = {
//   add: (num: number) => ChainableFunction<T>;
//   subtract: (num: number) => ChainableFunction<T>;
//   multiply: (num: number) => ChainableFunction<T>;
//   divide: (num: number) => ChainableFunction<T>;
//   getValue: () => T;
// };

// function createChainableFunction<T>(initialValue: T): ChainableFunction<T> {
//   let value: T = initialValue;

//   return {
//     add: function(num: number): ChainableFunction<T> {
//       value = (value as any) + num;
//       return this;
//     },
//     subtract: function(num: number): ChainableFunction<T> {
//       value = (value as any) - num;
//       return this;
//     },
//     multiply: function(num: number): ChainableFunction<T> {
//       value = (value as any) * num;
//       return this;
//     },
//     divide: function(num: number): ChainableFunction<T> {
//       if (num === 0) {
//         throw new Error("Cannot divide by zero");
//       }
//       value = (value as any) / num;
//       return this;
//     },
//     getValue: function(): T {
//       return value;
//     }
//   };
// }

// // Usage
// const result = createChainableFunction(10)
//   .add(5)
//   .subtract(3)
//   .multiply(2)
//   .divide(4)
//   .getValue();

// console.log(result); // Output: 4
