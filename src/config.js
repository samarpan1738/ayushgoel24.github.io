module.exports = {
  siteTitle: 'Ayush Goel | Software Engineer',
  siteDescription:
    'Ayush Goel is a Senior Software Development Engineer at Unicommerce eSolutions Pvt. Ltd., who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Ayush Goel, Ayush, Goel, ayushgoel24, software engineer, robots, opencv, computer vision, unicommerce, robomuse, perception, sensors',
  siteUrl: 'https://ayushgoel24.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-DF08LZ480D',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ayush Goel',
  location: 'Delhi, India',
  email: 'ayush.goel2427@gmail.com',
  github: 'https://github.com/ayushgoel24',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ayushgoel24/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayushsgoel/',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Certifications',
      url: '/#certifications'
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

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
