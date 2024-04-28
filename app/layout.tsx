import { Provider } from "jotai"
import { Providers } from "@/app/Providers"
import "../lib/globals.css"
import { useAtomsDevtools } from "jotai-devtools"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </Provider>
  )
}
