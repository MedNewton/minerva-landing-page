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
    // Original single-file landing + designer handoff sources kept for reference only.
    "legacy/**",
  ]),
  {
    rules: {
      // SVG icons/logos and CSS-mask icons are served as-is from /public; raster
      // photos go through next/image. Plain <img> is intentional for the rest.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
