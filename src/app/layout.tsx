"use client"
// "use server"
import { Provider } from "@/components/ui/provider"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "../components/ui/theme"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  
  return (
    <html suppressHydrationWarning>
    <body>
    <ChakraProvider value={system}>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {props.children}
    </ThemeProvider>
  </ChakraProvider>
  </body>
    </html>
  )
}