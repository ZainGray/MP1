// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖项与荣誉"
export const awardsIntro = "学术和职业成就的认可"

export const awards: Array<ActivityItemType> = [
  {
    name: '',
    description: '',
    date: '',
    location: '',
  },
 
]

// Research & Projects
export const projectHeadLine = "研究与项目"
export const projectIntro = "我参与的学术研究和技术项目"

export const projects: Array<ProjectItemType> = [
  {
    name: '手写数字识别',
    description: '在手写数字识别数据集上用不同的神经网络做分类任务',
    link: { href: 'https://github.com/Mineminen/Classic_model_Mnist', label: 'GitHub Cards' },
    tags: ['Python', 'cuda', 'pytorch']
  },
 
]

// Hobbies & Volunteer
export const activitiesHeadLine = "爱好与志愿活动"
export const activitiesIntro = "个人兴趣和社区贡献"

export const activities: Array<ActivityItemType> = [
   {
    name: 'dirKG_UI',
    description: '目录知识图谱交互界面前端和后端',
    link:  'https://github.com/Mineminen/dirKG_UI',
    date: '2023-10-01',
    location: '西安邮电大学',
   
  }
]
