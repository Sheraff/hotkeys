import { HotkeysContextProvider } from '../HotkeysContextProvider'
import { Shell } from './Shell'

import { ThemeContextProvider } from '@tanstack/devtools-ui'

import type { DevtoolProps } from '@tanstack/devtools-utils/solid'

export default function HotkeysDevtools(props: DevtoolProps) {
  return (
    <ThemeContextProvider theme={props.theme}>
      <HotkeysContextProvider>
        <Shell />
      </HotkeysContextProvider>
    </ThemeContextProvider>
  )
}
