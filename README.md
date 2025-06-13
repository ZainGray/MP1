# SCLS AI Camp - Mini Project 1: Personal Portfolio

[English](README.md) | [简体中文](README.md#readme-中文)

This is Mini Project 1 for SCLS AI Camp students, based on the excellent portfolio template originally created by [Corey Chiu](https://coreychiu.com). This template has been adapted for educational purposes to help students learn web development, Git workflows, and deployment practices.

## Original Credit
This template was created by Corey Chiu. Check out his work at [coreychiu.com](https://coreychiu.com)

## Quick Start

### Prerequisites
- Basic understanding of Git
- Node.js installed on your computer
- GitHub account

### Development
1. Fork this repository to your GitHub account:
   - Click the "Fork" button at the top right of this page
   - Select your GitHub account as the destination

2. Clone your forked repository:
```bash
git clone git@github.com:YOUR_USERNAME/MP1.git
cd MP1
```

3. Install dependencies:
```bash
pnpm install
```

4. Create and configure your `.env.local`:
```bash
cp .env.example .env.local
```

5. Start the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio

### Deployment
The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Create an account on [Vercel](https://vercel.com)
2. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SCLS-AI-Camp/MP1)

3. Follow Vercel's instructions to complete the deployment

## Features
- 🎨 Beautifully designed UI using TailwindCSS, MagicUI, and Shadcn/UI
- 📱 Responsive layout
- 🌙 Light/Dark Mode
- 📊 Github Calendar & Contribution Snake
- 💻 Tech Icon Cloud
- 🐦 Tweet Grid
- 👥 Visitor Counter
- 📝 Blog Section with MDX and Markdown support
- 📰 RSS Feed
- 📈 Web Analytics support (Google Analytics, OpenPanel Analytics, Plausible Analytics)

## Tech Stack
- Next.js
- TailwindCSS
- Shadcn/UI
- MagicUI
- Phosphor Icons

## Configuration Guide
After getting your site running, you can customize it by modifying these files:

### Configuration Files
- `.env.local` - Environment variables
- `src/config/siteConfig.ts` - Site configuration
- `src/config/infoConfig.ts` - Personal information
- `src/config/*.ts` - Section-specific configurations
- `src/content/blog/**.mdx` - Blog content
- `public/github-contribution-snake/*.svg` - GitHub contribution visualization

## Need Help?
- Watch the tutorial videos provided in the AI Camp course
- Ask questions during class sessions

## License
This project is licensed under the MIT License - see the LICENSE file for details.


# SCLS AI Camp - Mini Project 1: Personal Portfolio
This is Mini Project 1 for SCLS AI Camp students, based on the excellent portfolio template originally created by [Corey Chiu](https://coreychiu.com). This template has been adapted for educational purposes to help students learn web development, Git workflows, and deployment practices.

## Original Credit
This template was created by Corey Chiu. Check out his work at [coreychiu.com](https://coreychiu.com)

## Features
- 🎨 Beautifully designed UI using TailwindCSS, MagicUI, and Shadcn/UI
- 📱 Responsive layout
- 🌙 Light/Dark Mode
- 📊 Github Calendar & Contribution Snake
- 💻 Tech Icon Cloud
- 🐦 Tweet Grid
- 👥 Visitor Counter
- 📝 Blog Section with MDX and Markdown support
- 📰 RSS Feed
- 📈 Web Analytics support (Google Analytics, OpenPanel Analytics, Plausible Analytics)

## Tech Stack
- Next.js
- TailwindCSS
- Shadcn/UI
- MagicUI
- Phosphor Icons

## Getting Started

### Prerequisites
- Basic understanding of Git
- Node.js installed on your computer
- GitHub account

### Configuration Files
- `.env.local` - Environment variables
- `src/config/siteConfig.ts` - Site configuration
- `src/config/infoConfig.ts` - Personal information
- `src/config/*.ts` - Section-specific configurations
- `src/content/blog/**.mdx` - Blog content
- `public/github-contribution-snake/*.svg` - GitHub contribution visualization

### Development
1. Clone the repository:
```bash
git clone [your-forked-repo-url]

