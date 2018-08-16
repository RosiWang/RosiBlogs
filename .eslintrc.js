// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: false,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery:true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    //2,//禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //缩进风格
    'indent': 'off',
    //1,//return 语句中不能有赋值表达式
    // 'no-return-assign': ["error", "always"],
    //1,//不能用多余的空格
    // 'no-multi-spaces': ["error", { exceptions: { "ImportDeclaration": true } }]
  }
}
