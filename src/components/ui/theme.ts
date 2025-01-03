import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        dsoBand: {
          default : { value: "var(--dsoBand-default)" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)