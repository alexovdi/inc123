# Migrate Catalog App from Next.js to Vite + React Router

> Paste this prompt into a new Claude Code session for the inc123 project.

---

Migrate the catalog app from Next.js to Vite + React Router.

This is the same migration done on the Eckard project. The catalog is a pure client-side SPA — no SSR, no API routes, almost every page is "use client". Vite is the right tool.

## What to do

### 1. Install new deps, remove old

- Add: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `@fontsource-variable/raleway`, `@fontsource-variable/montserrat`
- Remove: `next`, `@tailwindcss/postcss`

### 2. Create new scaffold files

- `vite.config.ts` — plugins: react + tailwindcss, alias `@` → `./src`, server port matching current catalog port
- `index.html` — SPA entry with `<div id="root">` and `<script type="module" src="/src/main.tsx">`
- `src/main.tsx` — React DOM root + BrowserRouter + fontsource CSS imports + globals.css
- `src/vite-env.d.ts` — `/// <reference types="vite/client" />`

### 3. Port the layout

- Convert the catalog layout component:
  - `usePathname()` → `useLocation()` from react-router-dom
  - `Link` from `next/link` → `Link` from `react-router-dom` (prop: `href` → `to`)
  - `{children}` → `<Outlet />` from react-router-dom
  - Remove `"use client"` directive

### 4. Create router (src/app.tsx)

- Use React.lazy() for all page imports (code splitting)
- Wrap routes in `<Suspense>` with a loading spinner
- Define `<Route>` for every page that exists in nav-config
- Use a parent `<Route element={<CatalogLayout />}>` for the shared layout

### 5. Move pages

- Move all page files from the Next.js file-based routing structure to `src/pages/`
  - `src/app/(catalog)/page.tsx` → `src/pages/index.tsx`
  - `src/app/(catalog)/colors/page.tsx` → `src/pages/colors.tsx`
  - `src/app/(catalog)/components/<name>/page.tsx` → `src/pages/components/<name>.tsx`
- Strip `"use client"` from all pages (no-op in Vite)
- Fix any `next/link` imports → `react-router-dom` Link (change `href` to `to`)

### 6. Fix helpers

- Any component using `next/link` → swap to `react-router-dom` Link (`href` → `to`)
- All other helpers are pure React — no changes needed

### 7. Update globals.css

- Keep `@import "tailwindcss"` and theme imports
- Update `@source` paths (one less directory level since css moves from `src/app/` to `src/`)
- Add CSS vars for fontsource fonts:
  ```css
  :root {
    --font-raleway: "Raleway Variable";
    --font-montserrat: "Montserrat Variable";
  }
  ```

### 8. Update config files

- `tsconfig.json`: remove `next` plugin, `next-env.d.ts` from includes, change jsx to `react-jsx`, add `vite.config.ts` to includes
- `package.json` scripts: `dev` → `vite --port <PORT>`, `build` → `vite build`, add `preview` → `vite preview`
- Delete: `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `.next/`, old `src/app/` directory

### 9. Verify

1. `npm run build` — all packages build
2. Start dev server — loads on correct port
3. All routes return 200
4. No remaining `next/` imports in catalog source

## What does NOT change

- Design system package — zero changes
- Page content (JSX, props, demos) — identical
- Nav config — pure data, no Next.js deps
- Visual appearance — identical output
- Other apps (admin, portal, mobile) — still Next.js
