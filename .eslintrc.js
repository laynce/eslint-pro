module.exports = {
  env: {
    browser: true,
    es2021: true // 支持es6的全局变量，支持es6语法
    // amd: true
  },
  extends: [
    'standard',
    './eslintExtends.js' // 可以自定义一个npm包，这个包导出的是一个eslint的配置， extends 属性值可以省略包名的前缀 eslint-config-。
    // 'plugin:no-console/myConfig' // 插件里面的自定义配置
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 支持es6语法
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'no-console'
  ],
  rules: {
    'no-var': 0,
    'no-debugger': 0,
    'no-await-in-loop': 0,
    'no-use-before-define': 2,
    'no-console/no-console-log': 2 // 插件名/规则名
    // 'no-unused-vars': 0
  },
  globals: {
    var1: 'writable',
    window: false, // false 和字符串值 "readable" 等价于 "readonly"
    var2: 'off' // off禁用该全局变量
  }
}
