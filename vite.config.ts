import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import type { UserConfig as VitestConfig } from 'vitest'

const vite_config: UserConfig & { test: VitestConfig } = {
  plugins: [sveltekit()],

  server: {
    fs: { allow: [`..`] }, // needed to import from $root
    port: 3000,
  },

  preview: {
    port: 3000,
  },

  test: {
    environment: `jsdom`,
    css: true,
    coverage: {
      reporter: [`text`, `json-summary`],
    },
  },

  resolve: {
    alias: {
      $root: resolve(`.`),
    },
  },
}

export default vite_config
