# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 语言设置

**请始终使用中文回复用户。** 所有交流、解释和建议都应使用中文。

## 项目概述

这是独立开发者"迪恩"的个人网站。这是一个基于 Nuxt 3 的内容驱动站点，用于展示想法（博客）和项目。内容以 Markdown 格式存储在 `content/` 目录中，通过 Nuxt Content 渲染。

## 命令

```bash
# 开发
npm run dev          # 启动开发服务器 http://localhost:3000

# 构建与预览
npm run build        # 生产构建
npm run preview      # 本地预览生产构建
npm run generate     # 生成静态站点

# 依赖
npm install          # 安装依赖
```

## 架构

### 源码目录结构

```
src/
├── assets/
│   └── styles/main.css          # Tailwind 导入 + 主题自定义 CSS 变量
├── components/
│   ├── blog/                     # 博客/想法卡片
│   ├── layout/                   # 页头、页脚
│   ├── projects/                 # 项目卡片
│   └── sections/                 # 可复用页面区块（Hero、About、Projects、Ideas）
├── layouts/
│   └── default.vue               # 主布局（包含 Header/Footer + 结构化数据）
├── pages/
│   ├── index.vue                 # 首页（组合各区块）
│   ├── ideas/                    # 想法列表页与详情页
│   ├── projects/                 # 项目列表页与详情页
│   └── about.vue                 # 关于页面
└── app.config.ts                 # 应用全局配置（作者信息、导航、社交链接）
```

### 内容结构

```
content/
├── blog/                         # 想法和思考（渲染到 /ideas）
└── projects/                     # 项目展示（渲染到 /projects）
```

内容文件使用 frontmatter 定义元数据。示例：

```yaml
---
title: 标题
description: 描述
date: 2024-01-15
tags: ['标签1', '标签2']
thumbnail: /images/...           # 项目缩略图
liveUrl: https://...             # 项目在线地址
githubUrl: https://...            # GitHub 仓库
---
```

### 核心模式

**内容查询：**
- 使用 `@nuxt/content` 的 `queryContent()` 获取 markdown 文件
- 用 `useAsyncData` 包裹以实现缓存：`const { data } = await useAsyncData('key', () => queryContent(...).find())`
- 使用 `.sort({ date: -1 })` 按时间排序

**主题切换：**
- 通过 `@nuxtjs/color-mode` 实现深色/浅色模式
- 切换方式：`colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'`
- CSS 变量定义在 `src/assets/styles/main.css` 的 `@layer base` 中

**图标：**
- 使用 `@nuxt/icon` + Phosphor 图标库
- 用法：`<Icon name="ph:icon-name-duotone" />`

**布局：**
- `default.vue` 包含 SEO 结构化数据（JSON-LD）
- 所有页面使用 `<section>` 类配合 `container-custom` 实现统一间距

## 配置说明

- `nuxt.config.ts`：内容数据库已**禁用**（`database: false`）以避免 SQLite 问题
- `tsconfig.json`：扩展 `.nuxt/tsconfig.json`，启用严格模式
- 颜色模式：`classSuffix: ''` 表示深色模式使用 `.dark` 类（而非 `-dark`）

## 添加新内容

**新增博客/想法：**
1. 在 `content/blog/` 目录创建 `.md` 文件
2. 包含 frontmatter：`title`、`description`、`date`、`tags`
3. 自动出现在 `/ideas`

**新增项目：**
1. 在 `content/projects/` 目录创建 `.md` 文件
2. 包含 frontmatter：`title`、`description`、`date`、`tags`、`thumbnail`、`liveUrl`、`githubUrl`
3. 自动出现在 `/projects`
