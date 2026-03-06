# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Builder.io Demo Editor — a Next.js 12 app integrated with Builder.io's headless CMS. See `README.md` for standard dev commands (`yarn dev`, `yarn build`, `yarn lint`).

### Node version

This project requires **Node 18** (set as the nvm default). Next.js 12.2.2's SWC binary depends on `libssl.so.1.1`, which is only compatible with Node 18 on Ubuntu 24.04. Node 22 will fail at build/dev time with SWC errors.

### System dependency: libssl1.1

The SWC compiler used by Next.js 12 requires `libssl.so.1.1`. On Ubuntu 24.04 (which ships libssl3 only), this must be installed manually. The update script handles this automatically.

### Production build caveat

`yarn build` will compile successfully but fails during `getStaticPaths` because `src/pages/[...page].js` calls Builder.io's external API to enumerate pages. This is expected behavior — Builder.io content is fetched at runtime. The dev server (`yarn dev`) works without issue since it uses SSR.

### Running the app

- `yarn dev` — starts the dev server on `http://localhost:3000`
- The app has no local database or external service dependencies beyond internet access for Builder.io's CDN API.
- The API key is hardcoded in source; no `.env` files are needed.

### Lint

- `yarn lint` — runs `next lint` with `eslint-config-next`. Pre-existing warnings about `<img>` vs `<Image />` and missing alt props are in the codebase; these are not errors.
