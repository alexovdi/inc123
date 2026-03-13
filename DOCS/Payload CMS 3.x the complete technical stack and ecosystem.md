# Payload CMS 3.x: the complete technical stack and ecosystem

**Payload CMS 3.x (current stable: v3.78.0) is a fully TypeScript-native, Next.js-embedded headless CMS with a modular adapter architecture spanning 6 database options, 7 storage providers, 12+ official plugins, and deployment support on virtually any Node.js-capable platform.** The 3.0 release (May 2024) fundamentally restructured Payload from an Express-based server into a Next.js-native application, cutting dependencies from 88 to **27** and reducing the core bundle to ~1.6 MB. Payload was acquired by Figma in early 2025, and the ecosystem continues rapid expansion — including first-class Cloudflare Workers support, an AI-focused MCP plugin, and a new ecommerce plugin. Below is the exhaustive technical inventory.

---

## Core runtime: Node.js 20.9+, Next.js 15, React 19, TypeScript 5

Payload 3.x requires **Node.js 20.9.0 or higher** (Docker examples use `node:22-alpine` or `node:24-alpine`). The framework is built entirely in **TypeScript 5.x** (the monorepo pins ~5.7.3) and runs exclusively as ESM — no CommonJS support. Payload targets **React 19** (templates specify `"react": "^19"`), leveraging React Server Components and the React Compiler for the admin panel.

The Next.js integration is deep and structural. Payload installs directly into your Next.js `/app` directory, sharing routing, rendering, and deployment. The primary compatibility target is **Next.js 15.x** (specifically 15.2.8+ through 15.5.9+), with experimental **Next.js 16.2.0+** support landing in late 2025. Next.js 14 and earlier are not supported by Payload 3.x. The `withPayload` wrapper in `next.config.mjs` handles bundling integration.

**Key version matrix:**

| Technology | Version requirement |
|---|---|
| Payload CMS | 3.78.0 (latest stable, Feb/Mar 2026) |
| Node.js | ≥20.9.0 |
| Next.js | ^15.2.8 / ^15.3.8 / ^15.4.10 / ^15.5.9 / ^16.2.0 |
| React | ^19 (19.1.0+; native `useEffectEvent` from 19.2.0+) |
| TypeScript | 5.x (5.4.5–5.7.3 commonly used) |

TypeScript support goes beyond simple compatibility. The `payload generate:types` command produces a `payload-types.ts` file from your config, with full interfaces for every collection, global, and field. A `declare` module statement auto-enables type inference in the Local API. Additional generation commands include `payload generate:graphqlschema` and `payload generate:db-schema` (for Drizzle). The Payload config file is the single source of truth — database schemas, API schemas, admin UI, and TypeScript types all derive from it.

---

## Six database adapters power MongoDB, PostgreSQL, SQLite, and edge storage

Payload uses a **database adapter pattern** where all adapters implement a `BaseDatabaseAdapter` interface. Package versions stay synchronized with the core release.

| Adapter package | Database | ORM/Driver | Key details |
|---|---|---|---|
| `@payloadcms/db-mongodb` | MongoDB | Mongoose 8.15.1 | MongoDB driver ~6.13+; supports Atlas, replica sets, transactions |
| `@payloadcms/db-postgres` | PostgreSQL | Drizzle ORM 0.43.1 + `pg` | PostGIS extensions, read replicas, schema hooks |
| `@payloadcms/db-vercel-postgres` | PostgreSQL (Vercel/Neon) | Drizzle ORM + `@vercel/postgres` | Falls back to `pg` on localhost; auto-detects `POSTGRES_URL` |
| `@payloadcms/db-sqlite` | SQLite | Drizzle ORM + libSQL 0.4.6 | WAL mode, busy timeout, local file or remote (Turso) |
| `@payloadcms/db-d1-sqlite` | Cloudflare D1 | Drizzle ORM | **Beta**; serverless SQLite on Workers |
| `@payloadcms/drizzle` | — | Shared SQL layer | Base package used by all SQL adapters |

The PostgreSQL adapter exposes the full Drizzle instance via `payload.db.drizzle`, enabling raw SQL when needed. Configuration options include `idType` ('serial' or 'uuid'), `extensions` (e.g., 'uuid-ossp', 'postgis'), `blocksAsJSON`, and `readReplicas`. The MongoDB adapter supports compatibility modes for **AWS DocumentDB**, **Azure Cosmos DB**, and **Google Firestore** — though these carry limitations (Cosmos DB lacks multi-collection transactions, for instance).

**Third-party PostgreSQL services** — Supabase, Neon, CockroachDB — work through the standard `@payloadcms/db-postgres` adapter since they are PostgreSQL-compatible. **Turso** works through `@payloadcms/db-sqlite` via libSQL's remote mode. No MySQL adapter exists officially, despite Drizzle ORM supporting MySQL.

---

## Deployment spans serverless, containers, and bare metal across 15+ platforms

Because Payload 3.x is a Next.js application, it deploys anywhere Next.js runs. The `create-payload-app` CLI generates a production-ready multi-stage **Dockerfile** out of the box.

**First-class platforms with one-click deploy:**

- **Vercel** — Native fit. Preconfigured template with Neon database + Vercel Blob storage. The ~1.6 MB bundle fits serverless functions. Requires `clientUploads: true` for files over the 4.5 MB server-side limit.
- **Cloudflare Workers/Pages** — Full support since September 2025 via the OpenNext adapter. One-click template deploys with D1 (database) and R2 (storage). Requires Workers Paid plan.
- **Payload Cloud** — Official managed hosting. **Currently paused** during Figma transition. Previously offered tiers from free to enterprise ($199/mo Pro), with MongoDB Atlas, Cloudflare CDN, and Resend email built in.
- **Railway** — Multiple community templates (updated to v3.77.0). PostgreSQL co-located in the same project.

**Supported container and cloud platforms:**

- **AWS**: ECS/Fargate (community-proven with ~330 MB Docker images), EC2, Lambda (viable but cold-start-prone), SST (officially listed)
- **Google Cloud**: Cloud Run (recommended), Compute Engine, App Engine
- **Azure**: App Service (Docker deployment confirmed working)
- **DigitalOcean**: Droplets (officially documented) and App Platform
- **Fly.io, Render, Heroku, Coolify, CapRover, Northflank, Sliplane, Dokku**: All community-confirmed working via Docker or native Node.js deployment

**Serverless considerations** are critical: ephemeral filesystems on Vercel, Netlify, Lambda, and Heroku require cloud storage adapters for uploads. Database connection pooling (PgBouncer, Hyperdrive) is recommended. The environment variable `NEXT_SKIP_DB_CONNECT=true` prevents database connections during build phases.

**Package managers**: **pnpm** is officially preferred (the monorepo uses it). npm works with `--legacy-peer-deps`. Yarn 2+/Berry is supported; Yarn 1.x is not.

---

## Headless by design: any frontend framework via REST, GraphQL, or Local API

While Next.js is the native integration, Payload operates as a fully headless CMS consumable by any client. The official docs explicitly list **Remix, Astro, SvelteKit, Nuxt/Vue** as compatible frameworks. Angular, vanilla JavaScript, and mobile apps (React Native, Flutter, native iOS/Android) connect through standard HTTP APIs. Static generators like Gatsby and Eleventy can fetch content at build time.

**Three API layers serve different use cases:**

The **REST API** auto-generates CRUD endpoints at `/api/{collection-slug}` with a powerful query system supporting `where` operators (equals, not_equals, greater_than, less_than, in, like, contains, exists), `depth` for relationship population, pagination metadata, field selection via the Select API, and locale-aware responses. Custom endpoints can be added at any level.

The **GraphQL API** (via `@payloadcms/graphql`) auto-generates a typed schema with queries and mutations for all collections and globals, exposed at `/api/graphql` with an interactive playground. It includes a built-in **query complexity limiter** to prevent abuse. File uploads are REST-only.

The **Local API** is the performance standout — direct database queries from Node.js with zero HTTP overhead. It powers React Server Components, hooks, and scripts. Access control is bypassed by default (configurable), and all operations are fully typed. This works in any Node.js context: Next.js, SvelteKit, Remix, standalone scripts.

A newer **Payload SDK** (`@payloadcms/sdk`, beta) provides a type-safe REST client that mirrors Local API syntax for external consumers.

---

## Authentication: built-in JWT, API keys, and extensible strategy system

Payload's auth system activates by setting `auth: true` on any collection, instantly providing registration, login, logout, password reset, email verification, and account unlock.

**Three built-in strategies** ship with core:

- **HTTP-only cookies** — Default for browsers. Secure, HttpOnly, XSS-resistant.
- **JWT tokens** — Configurable expiration via `tokenExpiration`, brute-force protection via `maxLoginAttempts` and `lockTime`. Passed via `Authorization: JWT <token>` header.
- **API keys** — Non-expiring, per-user keys enabled with `auth: { useAPIKey: true }`. Ideal for server-to-server communication.

**Access control** is function-based rather than rigid RBAC. Functions return `true`/`false` or a `where` query, enabling any pattern — role-based, attribute-based, document-level, or field-level. The admin UI auto-adapts, hiding unauthorized actions.

For **OAuth/SAML/SSO**, options include the official **Enterprise SSO Plugin** (paid, supports SAML and OAuth 2.0 with providers like Okta), community plugins like **payload-authjs** (Auth.js/NextAuth 5 integration supporting GitHub, Google, Keycloak, etc.), **AuthSmith** (OAuth + Passkeys + MFA), and **payload-oauth2** (generic OAuth2). Payload 3.x replaced Passport.js with a custom strategy API: define `authenticate` functions that receive headers and return user documents, enabling any auth flow.

---

## Seven storage adapters, two email transports, and built-in search

**Storage adapters** are standalone packages in 3.x, each supporting `clientUploads` for direct browser-to-cloud uploads (critical for Vercel's 4.5 MB limit):

| Package | Provider |
|---|---|
| `@payloadcms/storage-s3` | Amazon S3 (also works with Cloudflare R2 via S3 API, MinIO, DigitalOcean Spaces, Backblaze B2) |
| `@payloadcms/storage-gcs` | Google Cloud Storage |
| `@payloadcms/storage-azure` | Azure Blob Storage |
| `@payloadcms/storage-vercel-blob` | Vercel Blob |
| `@payloadcms/storage-uploadthing` | Uploadthing |
| `@payloadcms/storage-r2` | Cloudflare R2 (native Workers binding, beta) |
| Local filesystem | Built-in default; no package needed |

Multiple adapters can run simultaneously — different storage backends for different collections.

**Email** is fully optional in 3.x (unlike 2.x). Two official adapters exist: `@payloadcms/email-nodemailer` (wraps Nodemailer for SMTP, supporting SendGrid, AWS SES, Postmark, Mailgun, Gmail, and any SMTP provider) and `@payloadcms/email-resend` (lightweight REST-based, preferred for serverless). In dev mode, Nodemailer auto-uses ethereal.email for testing.

**Search** is handled by `@payloadcms/plugin-search`, which creates a dedicated search collection, auto-indexes documents via hooks, and enables cross-collection search through standard Payload APIs — no external service required. For advanced needs, community plugins provide **Algolia** (`plugin-payload-algolia`) and **Meilisearch** (`@nouance/payload-meilisearch`) integrations. Elasticsearch can be integrated via custom hooks.

---

## 12+ official plugins and a growing community ecosystem

**Official plugins** (all `@payloadcms/plugin-*`, version-synced with core):

| Plugin | Purpose |
|---|---|
| `plugin-seo` | SEO meta fields, Open Graph, structured data injection |
| `plugin-stripe` | Two-way Stripe sync, webhook handling, REST API proxy |
| `plugin-ecommerce` | Products, variants, orders, transactions; extensible PaymentAdapter interface |
| `plugin-redirects` | URL redirect management (301/302/307/308) with Next.js integration |
| `plugin-nested-docs` | Hierarchical parent-child documents, breadcrumbs, URL path generation |
| `plugin-form-builder` | Dynamic form creation, submission storage, email notifications |
| `plugin-cloud-storage` | Generic cloud storage adapter interface for custom providers |
| `plugin-search` | Built-in search index and cross-collection search |
| `plugin-multi-tenant` | Tenant-scoped data, per-user tenant assignment, domain-based routing |
| `plugin-mcp` | Model Context Protocol server for AI assistants/LLMs |
| `plugin-sentry` | Sentry error tracking and performance monitoring |
| `plugin-import-export` | CSV/JSON data export from admin UI (import not yet implemented) |

**Other official packages** extend the ecosystem: `@payloadcms/sdk` (typed REST client), `@payloadcms/admin-bar` (frontend admin bar), `@payloadcms/live-preview-react` (real-time preview), `@payloadcms/graphql`, `@payloadcms/translations` (i18n), and `@payloadcms/payload-cloud`.

**Rich text editors**: **Lexical** (`@payloadcms/richtext-lexical`) is the default, offering modular features, slash commands, custom blocks via `BlocksFeature`, upload embedding, tables, markdown support, and built-in HTML/Markdown/JSX converters. **Slate** (`@payloadcms/richtext-slate`) is **deprecated** and will be removed in Payload 4.0. A `SlateToLexicalFeature` migration tool and `convertSlateToLexical` script handle data conversion.

**Notable community plugins** include `@ai-stack/payloadcms` (AI content generation with GPT-Image-1), `payload-authjs` (NextAuth 5), `@authsmithdev/payload` (OAuth + Passkeys), `payload-openapi` (OpenAPI/Swagger spec generation), `@nouance/payload-analytics` (GA/Plausible dashboard), and `@seshuk/payload-storage-bunny` (Bunny CDN).

---

## DevOps tooling: migrations, Docker, and CI/CD patterns

Payload includes a **built-in migration system** essential for PostgreSQL deployments. Commands include `payload migrate` (run pending), `migrate:create` (generate migration file), `migrate:status`, `migrate:down`, `migrate:fresh`, and `migrate:reset`. Migration files commit to version control; CI pipelines run `payload migrate && pnpm build`.

The generated **Dockerfile** uses a multi-stage build (deps → builder → runner) with `output: 'standalone'` in Next.js config, producing optimized ~330 MB images. **Docker Compose** is generated for local development. No official Docker Hub image exists — you build from source.

For **CI/CD**, the standard GitHub Actions pattern builds Docker images, pushes to a container registry (ECR, GHCR), and deploys to the target platform. The `NEXT_SKIP_DB_CONNECT=true` flag prevents database connections during build. Key environment variables are `PAYLOAD_SECRET` (required), `DATABASE_URI`, `NEXT_PUBLIC_SERVER_URL`, and `NODE_ENV`.

---

## Conclusion

Payload CMS 3.x represents a rare architectural bet: embedding a full CMS directly into Next.js rather than running alongside it. This yields genuine advantages — the Local API eliminates network overhead, React Server Components power the admin panel, and the 27-dependency footprint enables true serverless deployment. The adapter pattern across databases, storage, email, and rich text means no vendor lock-in at any layer. The ecosystem's most significant gaps are the absence of a MySQL adapter, the paused Payload Cloud during the Figma transition, and OAuth/SSO being gated behind enterprise licensing or community plugins. The Cloudflare D1 adapter and MCP plugin signal where the platform is heading: edge-native deployment and AI-first content management. For teams already invested in the TypeScript/React/Next.js stack, Payload 3.x offers the most tightly integrated CMS option available today.