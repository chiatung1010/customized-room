module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'react/prop-types',
    "plugin:prettier/recommended",
    'standard', // omit the prefix of eslint-config-standard
    'standard-react' // omit the prefix of eslint-config-standard-react
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-expor t-components': 'warn',
    semi: ['error', 'always'], // 強制使用分號
  }
}
