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
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
