---
layout: Post
title: Git相关规范管理工具  
date: 2023-08-04  
author:   Jett 
categories: 
- Common
- Network
- MCU
- Read
- Life
tags: 
  - Common
giscus: true  
---

# 1.前提
已安装[pnpm](https://www.pnpm.cn/installation)
# 2.安装husky
[🐶 husky | 🐶 husky (typicode.github.io)](https://typicode.github.io/husky/#/?id=install)

1. pnpm install husky --save-dev
2. npx husky install
3. 在package.json中添加
```json
	"scripts": {
        "prepare": "husky install",
    },
```
# 3.安装commitlint
[commitlint - Lint commit messages](https://commitlint.js.org/#/./guides-local-setup?id=guide-local-setup)
1. pnpm add @commitlint/cli @commitlint/config-conventional -D
2. 在项目根目录下添加配置文件commitlint.config.js
```bash
touch commitlint.config.js
```
```js
// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};

```
# 4.安装release-it
[release-it](https://github.com/release-it/release-it/blob/main/docs/git.md)
1. pnpm add release-it @release-it/conventional-changelog -D
2. 在项目根目录下添加 .release-it.json
```bash
touch .release-it.json
```
```json
//.release-it.json
{
    "plugins": {
        "@release-it/conventional-changelog": {
            "preset": "angular",
            "infile": "CHANGELOG.md"
        }
    },
    "git": {
        "commitMessage": "chore: release v${version}",
        "push": false,
        "requireUpstream": false
    },
    "github": {
        "release": false,
        "draft": false
    },
    "npm": {
        "publish": false
    }
}
```
3. 在package.json添加
```json
{
  "scripts": {
    "release": "release-it"
  }
}
```
4. pnpm release
# 5.reference
<https://zhuanlan.zhihu.com/p/396636794>  
<https://zhuanlan.zhihu.com/p/619659218>
<https://www.conventionalcommits.org/zh-hans/v1.0.0/>
<https://www.cnblogs.com/linhuiy/p/15896611.html>  
[约定式提交 (conventionalcommits.org)](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
[Commit Message 规范 - 她微笑的脸 - 博客园 (cnblogs.com)](https://www.cnblogs.com/linhuiy/p/15896611.html)
