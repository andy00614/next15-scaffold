/** @type {import("eslint").Linter.Config} */
const config = {
  // 指定 TypeScript 解析器，使 ESLint 能够理解 TypeScript 语法
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 启用项目范围的类型检查
    project: true,
  },
  // 启用的 ESLint 插件
  plugins: [
    "@typescript-eslint", // TypeScript 语法支持
    "drizzle", // Drizzle ORM 规则支持
  ],
  // 继承的 ESLint 配置集合
  extends: [
    "plugin:@next/next/recommended", // Next.js 推荐规则
    "plugin:drizzle/recommended", // Drizzle ORM 推荐规则
    "plugin:@typescript-eslint/recommended-type-checked", // TypeScript 类型检查规则
    "plugin:@typescript-eslint/stylistic-type-checked", // TypeScript 风格规则
  ],
  rules: {
    // 以下是一些自定义规则配置

    // 关闭数组类型声明样式规则，允许灵活使用 Array<T> 或 T[]
    "@typescript-eslint/array-type": "off",

    // 关闭类型定义一致性规则，允许同时使用 interface 和 type
    "@typescript-eslint/consistent-type-definitions": "off",

    // 配置类型导入的一致性
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports", // 优先使用 import type
        fixStyle: "inline-type-imports", // 内联类型导入样式
      },
    ],

    // 未使用变量的警告配置
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" }, // 忽略以下划线开头的参数
    ],

    // 关闭 require-await 规则，允许 async 函数不包含 await
    "@typescript-eslint/require-await": "off",

    // Promise 相关规则配置
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false, // 在 JSX 属性中允许返回 void 的 Promise
        },
      },
    ],
  },
};

module.exports = config;
