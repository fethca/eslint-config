module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@fethcat", "import"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "require-await": "warn",
    "no-return-await": "off",
    "no-unused-vars": "off",
    "import/first": "warn",
    "import/order": [
      "warn",
      { groups: [["builtin", "external"], "index", "parent", "sibling"] },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/return-await": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { ignoreRestSiblings: true },
        ],
      },
    },
    {
      files: ["*.test.*"],
      env: {
        jest: true,
      },
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
    },
  ],
};
