---
title: ClaudeCode Remote
description: 基于 Electron 的 AI 驱动多项目任务管理桌面客户端，集成 Claude Code CLI 实现自动化开发任务执行
date: 2025-06-12
tags: ['Electron', 'Vue 3', 'TypeScript', 'AI', 'PouchDB', 'CouchDB']
thumbnail: /images/projects/claudecode-remote.png
featured: true
githubUrl: https://github.com/bailan-valar/claudecode-remote
---

# ClaudeCode Remote

一款面向独立开发者的 AI 驱动多项目管理工具。通过集成 Claude Code CLI，实现任务的自动规划、执行与审查，让 AI 成为你的全天候开发搭档。

## 项目背景

在日常开发中，我同时维护多个项目，经常需要在它们之间切换上下文、管理任务进度。传统项目管理工具缺少与代码执行的深度集成，而 AI 编程助手又缺乏跨项目的统筹能力。ClaudeCode Remote 正是为解决这个痛点而生——将多项目管理、AI 任务执行和数据同步融合到一个本地优先的桌面应用中。

## 技术栈

- **前端**：Vue 3 + TypeScript + Pinia + Vue Router
- **桌面框架**：Electron（支持 Windows、macOS、Linux）
- **构建工具**：electron-vite + Vite
- **本地数据库**：PouchDB（本地优先，支持离线使用）
- **远程同步**：CouchDB（多设备数据同步与冲突解决）
- **AI 集成**：Claude Code CLI（支持 Anthropic、Kimi、智谱 GLM 等多供应商）
- **移动访问**：Express.js 内置 Web 服务器，支持手机浏览器访问

## 主要功能

### 🤖 AI 驱动的任务引擎

- 自动调用 Claude Code CLI 执行规划和开发任务
- 任务生命周期管理：`pending` → `planning/developing` → `reviewing` → `completed`
- 会话继承机制，保持任务上下文的连续性
- 自动 Git 提交与耗时追踪

### 📁 多项目管理

- 同时管理多个开发项目，项目级别序列化执行避免冲突
- 可选 Git Worktree 隔离，安全地并行处理不同分支的任务
- 实时日志流和进度监控

### 🔄 本地优先的数据架构

- PouchDB 本地存储，断网也能正常使用
- CouchDB 远程同步，多设备数据一致
- 自动冲突检测与解决机制

### 📱 跨平台访问

- Electron 桌面客户端，原生体验
- 内置 Web 服务器模式，手机/浏览器也能管理任务
- 响应式设计，桌面和移动端界面自适应

### 🔔 通知与集成

- 企业微信 Webhook 集成，任务完成/失败即时通知
- 可自定义 Webhook 端点，对接外部系统
- 任务执行摘要自动推送

## 总结

这个项目是我探索 AI 辅助开发工作流的核心工具。它让我能以"指派任务、审查结果"的方式与 AI 协作，大幅提升了跨项目管理的效率。本地优先的架构确保了数据安全和离线可用性，而 CouchDB 同步则让工作在不同设备间无缝流转。
