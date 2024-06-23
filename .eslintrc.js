module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // This ensures Node.js globals like `module` are recognized
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
  },
}
