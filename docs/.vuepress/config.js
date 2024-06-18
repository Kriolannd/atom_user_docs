import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'ВелдБокс',
  description: 'Здесь вы познаете силу',
  base: '/atom_user_docs/',
  theme: hopeTheme({
    plugins: {
      search: true,
      // search: {
      //   plugin options here
      // },
    },
    darkmode: 'enable',
    navbar: [
      {text: 'Главная', link: '/'},
      {text: 'Задания', link: '/tasks/'},
      {text: 'Учебные материалы', link: '/lessons/'},
      {text: 'Темы', link: '/topics/'},
    ],
    sidebar: [
      '/',
      {
        text: 'Работа с заданиями',
        link: '/tasks/',
        prefix: '/tasks/',
        collapsible: true,
      },
      {
        text: 'Работа с учебными материалами',
        link: '/lessons/',
        prefix: '/lessons/',
        collapsible: true,
      },
      {
        text: 'Работа с темами',
        link: '/topics/',
        prefix: '/topics/',
        collapsible: true,
      }
    ],
  }),
  bundler: viteBundler(),
})
