import type { Preview } from '@storybook/react'
import 'src/app/globals.scss'

const preview: Preview = {
  loaders: [
    async () => {
      spells: await (await fetch('https://api.open5e.com/spells/')).json()
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
