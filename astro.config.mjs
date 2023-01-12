
// astro.config.mjs
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind(), prefetch()]
});