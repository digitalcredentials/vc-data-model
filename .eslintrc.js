module.exports = {
  root: true,
  extends: ['standard-with-typescript', 'prettier', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['dist', 'test', 'types'],
  rules: {
    'prettier/prettier': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/return-await': 'off'
  }
}
