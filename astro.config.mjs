import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    astroI18next({
      baseLanguage: "en",
      i18next: {
        debug: true, // convenient during development to check for missing keys
        supportedLngs: ["en", "pt"],
        initImmediate: false,
        backend: {
          loadPath: "./src/locales/{{lng}}.json",
        },
      },
      i18nextPlugins: { fsBackend: "i18next-fs-backend" },
    }),
  ],
});
