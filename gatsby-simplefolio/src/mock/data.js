import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'cgdiomampo-grayscale.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'suna-website.jpg',
    title: 'Suna Shoes and Accessories',
    info:
      'SUNA is proudly Australian-owned and was established in Toowoomba, Queensland in 1984. We are a husband and wife passionate about our business and we are dedicated to delivering style and innovation without having to compromise on comfort. Suna Shoes offers an extensive range of women’s footwear from around the world.',
    info2: '',
    url: 'https://www.suna.com.au/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sunnybank-website.jpg',
    title: 'Sunnybank Experience',
    info:
      '‘Experience Sunnybank’, a website dedicated to the many restaurants and entertainment retailers that Sunnybank Plaza and Sunny Park have on offer.',
    info2: '',
    url: 'https://www.experiencesunnybank.com.au/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'merthyrvillage-website.jpg',
    title: 'Merthyr Village',
    info:
      'Merthyr Village is the Heart of New Farm and one of Brisbane’s premier shopping locations complete with more than twenty specialty stores in Food, Homewares, Gifts, Books, Liquor and the latest in women’s fashion.',
    info2: '',
    url: 'https://www.merthyrvillage.com.au/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cgdiomampo',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
