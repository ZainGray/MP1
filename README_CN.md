# SCLS AI Camp - Mini Project 1: Personal Portfolio

[English](README.md) | [简体中文](README_CN.md)

这是 SCLS AI Camp 的第一个迷你项目，基于 [Corey Chiu](https://coreychiu.com) 创建的优秀作品集模板。我们已经针对教育目的对其进行了调整，帮助学生学习网页开发、Git 工作流程和部署实践。

## 原作者致谢
本模板由 Corey Chiu 创建。查看他的作品：[coreychiu.com](https://coreychiu.com)

## 快速开始

### 前置要求
- 基本的 Git 知识
- 电脑上已安装 Node.js和pnpm
- GitHub 账号

### 开发步骤
1. Fork 这个仓库到你的 GitHub 账号：
   - 点击页面右上角的 "Fork" 按钮
   - 选择你的 GitHub 账号作为目标

2. 克隆你 fork 的仓库：
```bash
git clone git@github.com:你的用户名/MP1.git
cd MP1
```

3. 安装依赖：
```bash
pnpm install
```

4. 创建并配置 `.env.local`：
```bash
cp .env.example .env.local
```

5. 启动开发服务器：
```bash
pnpm dev
```

6. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看你的作品集

### 部署
使用 [Vercel](https://vercel.com) 是部署你的作品集最简单的方式：

1. 在 [Vercel](https://vercel.com) 创建账号
2. 点击下面的按钮开始部署：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SCLS-AI-Camp/MP1)

3. 按照 Vercel 的说明完成部署

## 功能特点
- 🎨 使用 TailwindCSS、MagicUI 和 Shadcn/UI 设计的精美界面
- 📱 响应式布局
- 🌙 明暗主题模式
- 📊 GitHub 贡献日历和贡献蛇形图
- 💻 技术图标云
- 🐦 推文展示
- 👥 访客计数器
- 📝 支持 MDX 和 Markdown 的博客部分
- 📰 RSS 订阅
- 📈 网站分析支持（Google Analytics、OpenPanel Analytics、Plausible Analytics）

## 技术栈
- Next.js
- TailwindCSS
- Shadcn/UI
- MagicUI
- Phosphor Icons

## 配置指南
在网站运行之后，你可以通过修改这些文件来自定义你的网站：

### 配置文件
- `.env.local` - 环境变量
- `src/config/siteConfig.ts` - 网站配置
- `src/config/infoConfig.ts` - 个人信息
- `src/config/*.ts` - 各部分的具体配置
- `src/content/blog/**.mdx` - 博客内容
- `public/github-contribution-snake/*.svg` - GitHub 贡献可视化

## 需要帮助？
- 观看 AI Camp 课程提供的教学视频
- 在课堂上提出问题

## 许可证
本项目基于 MIT 许可证 - 查看 LICENSE 文件了解详情

# SCLS AI Camp - 迷你项目1：个人作品集

这是 SCLS AI Camp 学生的第一个迷你项目，基于 [Corey Chiu](https://coreychiu.com) 最初创建的优秀作品集模板。该模板已针对教学目的进行了调整，帮助学生学习网页开发、Git 工作流和部署实践。

## 原作者致谢
本模板由 Corey Chiu 创建。查看他的作品：[coreychiu.com](https://coreychiu.com)

## 功能特点
- 🎨 使用 TailwindCSS、MagicUI 和 Shadcn/UI 设计的精美界面
- 📱 响应式布局
- 🌙 明暗主题模式
- 📊 GitHub 贡献日历和贡献蛇形图
- 💻 技术图标云
- 🐦 推文展示
- 👥 访客计数器
- 📝 支持 MDX 和 Markdown 的博客部分
- 📰 RSS 订阅
- 📈 网站分析支持（Google Analytics、OpenPanel Analytics、Plausible Analytics）

## 技术栈
- Next.js
- TailwindCSS
- Shadcn/UI
- MagicUI
- Phosphor Icons

## 入门指南

### 前置要求
- 基本的 Git 知识
- 电脑上已安装 Node.js
- GitHub 账号

### 配置文件
- `.env.local` - 环境变量
- `src/config/siteConfig.ts` - 网站配置
- `src/config/infoConfig.ts` - 个人信息
- `src/config/*.ts` - 各部分的具体配置
- `src/content/blog/**.mdx` - 博客内容
- `public/github-contribution-snake/*.svg` - GitHub 贡献可视化

### 开发步骤
1. 克隆仓库：
```bash
git clone [your-forked-repo-url]