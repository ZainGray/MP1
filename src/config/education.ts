
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '西安邮电大学',
      major: '大数据技术与工程',
      logo: 'college',
      start: '2023',
      end: '2026'
    },
    {
      school: '郑州航空工业管理学院',
      major: '网络工程',
      logo: 'college',
      start: '2019',
      end: '2023'
    }
  ]