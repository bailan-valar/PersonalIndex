# 个人主页

独立开发者迪恩的个人主页，记录想法、展示项目。

## 技术栈

- **框架**: Nuxt 3
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: Nuxt Content (Markdown)
- **图标**: Nuxt Icon
- **部署**: Cloudflare Pages

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
├── content/           # Markdown 内容文件
│   ├── blog/         # 想法/思考
│   └── projects/     # 项目介绍
├── public/           # 静态资源
├── src/
│   ├── assets/       # 样式和资源
│   ├── components/   # Vue 组件
│   ├── layouts/      # 布局组件
│   └── pages/        # 页面路由
├── app.config.ts     # 应用配置
└── nuxt.config.ts    # Nuxt 配置
```

## 添加内容

### 添加想法

在 `content/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 文章标题
description: 文章描述
date: 2024-01-15
tags: ['标签1', '标签2']
---

文章内容...
```

### 添加项目

在 `content/projects/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 项目名称
description: 项目描述
date: 2024-01-15
tags: ['Vue', 'TypeScript']
thumbnail: /images/projects/project.png
featured: true
liveUrl: https://example.com
githubUrl: https://github.com/user/repo
---

项目详细介绍...
```

## 部署

### Cloudflare Pages

```bash
# 构建
npm run build

# 或使用 Cloudflare Pages CI/CD
# 推送到 Git 仓库后自动部署
```

## 开发

- 首页: `/`
- 想法: `/ideas`
- 项目: `/projects`
- 关于: `/about`

## License

MIT
