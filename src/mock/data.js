import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lauren Orsini | Dev',
  lang: 'en',
  description: 'hi',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Lauren Orsini',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'woman.png',
  paragraphOne:
    'A full stack web developer with experience in the internet industry and a B.S. in C.S. My current favorite tech stack includes ReactJS, GraphQL, & MySQL.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1qQYjnzDmou-P9GNFf0dCJmybU5P7oqAT/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'playlistener.jpg',
    title: 'Playlistener',
    info: 'A webapp for converting YouTube playlists to Spotify and saving to the user\'s account. Uses React, Express, and YouTube and Spotify\'s APIs.',
    info2: '',
    url: 'https://playlistener0.herokuapp.com/',
    repo: 'https://github.com/lpjune/playlistener', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatclone.jpg',
    title: 'Chat Clone',
    info: 'A full-stack messenger clone built with React, GraphQL + Apollo, and MySQL. Deployed using AWS EC2 and RDS.',
    info2: '',
    url: 'https://github.com/lpjune/chat-clone',
    repo: 'https://github.com/lpjune/chat-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'handup.jpg',
    title: 'HandUp',
    info: 'A full-stack chat webapp that allows users to ask anonymous questions in class. Best Use of Google Cloud at BullyHack 2020.',
    info2: '',
    url: 'https://github.com/lpjune/bullyhack20',
    repo: 'https://github.com/lpjune/bullyhack20', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working together?',
  btn: 'Let\'s chat!',
  email: 'laurenporsini@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/laurenporsini/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lpjune',
    },
  ],
};
