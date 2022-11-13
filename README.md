# Nathan Puri website

## Key technologies

- Astro
- Netlify CMS
- Netlify hosting

## Running locally

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## Login to Netlify CMS while developing locally

1. Open `http://localhost:3000/admin/index.html` in a browser.
1. Set site URL to `https://gurunatan.org`.

## Use local Netlify CMS backend during development

1. Add top-level `local_backend: true` config setting.
1. Run npx netlify-cms-proxy-server from the root directory.

## Layouts

- netlify_cms.astro: used by markdown pages created by Netlify-CMS
- Layout.astro: used by non-Netlify-CMS-created pages

## Known issues with Netlify CMS

- Enabling i18n, then adding a translation to an existing page does not include the hidden layout field in the markdown output.
  - Each page must be recreated with translations.
