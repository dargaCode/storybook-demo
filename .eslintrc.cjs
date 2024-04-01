module.exports = {
  root: true,
  env: {
    // "es2020": true,
    es6: true,
    // Enable global browser variables like `window`.
    browser: true,
    // Enable global node variables like `process`.
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // Disable old rules requiring `React` import in every .jsx file.
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    // Turn off all rules that are unnecessary or might conflict with Prettier.
    "plugin:prettier/recommended",
  ],
  // ignorePatterns: ["dist", ".eslintrc.cjs"],
  // Allow Eslint to understand TypeScript syntax.
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // Root tsconfig file of the project.
    project: ["./tsconfig.eslint.json", "./tsconfig.node.json"],
    // ECMAScript version supported in the project.
    ecmaVersion: 2021,
    // We use ECMAScript modules for import/export.
    sourceType: "module",
    ecmaFeatures: {
      // Enable jsx for React.
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "jsx-a11y",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  rules: {
    // Automatically sort imports and exports
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    // Sort props categorically, but not alphabetically
    "react/jsx-sort-props": [
      "warn",
      {
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
    //    "react/prop-types": "off",
    "import/no-extraneous-dependencies": [
      "off",
      {
        // Since these files are only used during dev and build steps,
        // allow them to import from packages in `devDependencies`.
        devDependencies: ["*.config.*", "*.setup.*", "./stories/*.**"],
      },
    ],
    // Prettier will fix violations itself - ignore them in ESlint.
    "prettier/prettier": "off",
    // We use dangling underscores quite a bit in our mongo variables eg `_id`.
    "no-underscore-dangle": "off",
    // Allow unary `++` operator for loop syntax only.
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
