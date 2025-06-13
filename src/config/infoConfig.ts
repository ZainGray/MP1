export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Zain Gray'
export const headline = '一名热爱编程的研究生' 
export const introduction =
  "专注于人工智能和软件开发,希望通过技术改变世界。"
export const email = 'qiuy8685@gmail.com'
export const githubUsername = 'Mineminen'

// about page
export const aboutMeHeadline = '个人简介'
export const aboutParagraphs = [
  "大家好，我是Zain Gray，一名热爱编程的研究生。我的专业是网络工程，专注于人工智能和软件开发。我相信技术可以改变世界，并希望通过我的工作为社会做出贡献。",
]
// blog
export const blogHeadLine = "我在思考些什么"
export const blogIntro =
  "我写了一些关于人工智能、时间序列和编程的内容"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'CSDN',
    icon: 'csdn',
    href: 'https://blog.csdn.net/qq_47753695?type=blog',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/479373557?spm_id_from=333.1007.0.0',
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Mineminen',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
