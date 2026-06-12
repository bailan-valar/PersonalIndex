export default defineAppConfig({
  title: '迪恩 - Independent Developer',
  description: '独立开发者迪恩 - INFJ | 数字游民梦想 | 把奇思妙想变成现实',

  author: {
    name: '迪恩',
    title: 'Independent Developer',
    personality: 'INFJ',
    tagline: '喜欢把各种奇思妙想变成现实',
  },

  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
  },

  nav: {
    main: [
      { label: '首页', to: '/' },
      { label: '想法', to: '/ideas' },
      { label: '项目', to: '/projects' },
      { label: '关于', to: '/about' },
    ],
  },
})
