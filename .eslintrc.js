module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',

    'space-before-function-paren': 'off',

    'semi': 0,
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'quotes': 0,
    'eol-last': 0,
    'eqeqeq': 0,
    'no-unused-vars': 0,
    'camelcase': 0,
    // 'import/extensions': ['error', 'always', {
    //   js: 'never',
    //   vue: 'never'
    // }],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}