const siteMetadata = {
  title: {
    en: 'Devnaweb - A developer blogger',
    pt: 'Devnaweb - Um dev blogueiro',
  },
  author: 'Daniel Alves',
  //headerTitle: { en: 'Devnaweb', pt: 'Devnaweb' },
  description: {
    en: 'A blog created to help developers',
    pt: 'Um blog criado para ajudar desenvolvedores',
  },
  language: 'pt-br',
  siteUrl: 'https://devnaweb.com.br',
  siteRepo: 'https://github.com/helpsdan/devnaweb-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'helpsdan7@gmail.com',
  github: 'https://github.com/helpsdan',
  instagram: 'https://instagram.com/devnaweb',
  linkedin: 'https://www.linkedin.com/in/danaguiar/',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  locale: 'pt-BR',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
