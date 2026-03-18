import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@/design-system/components",
              message:
                "Import directly from the component file (e.g. @/design-system/components/Card) to avoid Turbopack compilation freezes.",
            },
            {
              name: "@/design-system/primitives",
              message:
                "Import directly from the primitive file (e.g. @/design-system/primitives/Button) to avoid Turbopack compilation freezes.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
