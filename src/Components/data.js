import { useTranslation } from 'react-i18next'
import health from './Cards/health.png'

export const projects = [
  {
    title: 'Well, Here you are!',
    subtitle: 'Portfolio creation process',
    description: 'How did this portfolio came to exist?',
    image: './project-1.gif',
    link: 'https://github.com/AnneCh/my-portfolio',
  },
  {
    title: 'Crypto Bot',
    subtitle: "I'll make it become one.",
    description:
      "On how I am building my own crypto trading bot, my first unsupervized project. and I'm really struggling with it!",
    image: './project-2.gif',
    link: 'https://github.com/AnneCh/Project',
  },
  {
    title: 'TokenFarm Project',
    subtitle: 'Free Code Camp Token Farm Project',
    description:
      'Building an interface with smart contract to deposit tokens and withdraw them.',
    image: './project-3.gif',
    link: 'https://github.com/AnneCh/TokenFarm---Lesson-13',
  },
  {
    title: 'Storage Contract',
    subtitle: 'Creation of a storage contract project',
    description: "'Fund Me' storage contract. ",
    image: './project-4.gif',
    link: 'https://github.com/AnneCh/brownie_fund_me',
  },
]

export const topics = [
  {
    image: { health },
    title: '',
    description: '',
    link: '/HealthCard_inside',
  },
  {
    image: '',
    title: '.',
    description: '.',
    link: '/Martial_Inside',
  },
  {
    image: '',
    title: '.',
    description: '.',
    link: '/Music_Inside',
  },
  // {
  //   image: '',
  //   title: '.',
  //   description: '.',
  //   link: '',
  // },
]

export const tools = [
  'Solidity',
  'Python',
  'JavaScript',
  'Remix',
  'NodeJS',
  'Brownie',
  'Ganache',
  'Infura',
  'Metamask',
  'Linux CLI',
  'HTML',
  'CSS',
  'React',
  'Adobe Audition',
  'Adobe Premiere Pro',
  'Adobe Photoshop',
  'Adobe Indesign',
]
