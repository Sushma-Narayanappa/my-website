module.exports = {
  siteTitle: 'Sushma | Software Engineer',
  siteDescription:
    'Sushma is a software engineer based in Banglore,India, who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Sushma, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://sushmagowda.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sushma',
  location: 'Banglore,India',
  email: 'dsushma748@gmail.com',
  github: 'https://github.com/Sushma-Narayanappa',
  twitterHandle: '@sushma36467011',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Sushma-Narayanappa',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sushma-gowda-3085b512a',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/Sushma-Narayanappa',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sushma_sush_1996',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sushma36467011',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience And Projects',
      url: '/#jobs',
    },
    
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
