import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored WebGL/canvas effect components: imperative refs and
    // manual render loops are intentional here and not meant to be
    // refactored to satisfy React Compiler-oriented hook rules.
    "src/components/effects/**",
  ]),
]);

export default eslintConfig;
