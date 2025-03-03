// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'ระบบจัดการร้านค้าออนไลน์',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'รายละเอียดเว็บไซต์, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  compatibilityDate: '2025-03-04',
})