import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

export default function ListImg() {
  return (
    <ImageList sx={{ width: 1200, height: 750 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <a href={item.to}>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </a>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img:'/music.jpg',
    to:'/music.jpg',
    title: 'festival',
  },
  {
    img:'/music1.jpg',
    to:'/music1.jpg',
    title: 'Drummer',
  },
  {
    img: '/music2.jpg',
    to:'/music2.jpg',
    title: 'concert',
  },
  {
    img: '/music3.jpg',
    to:'/music3.jpg',
    title: 'crowd',
  },
  {
    img: '/music4.jpg',
    to:'/music4.jpg',
    title: 'jamsession',
  },
  {
    img: '/music5.jpg',
    to:'/music5.jpg',
    title: 'portrait',
  },
  {
    img: '/music6.jpg',
    to:'/music6.jpg',
    title: 'JamSessions',
  },
  {
    img: './music7.jpg',
    to:'/music7.jpg',
    title: 'DJ',
  },
  {
    img: '/music8.jpg',
    to:'/music.jpg',
    title: 'gala',
  },
  {
    img: '/music9.jpg',
    to:'/music9.jpg',
    title: 'TVshow',
  },
  {
    img: '/music10.jpg',
    to:'/music10.jpg',
    title: 'Concert',
  },
  {
    img: '/music11.jpg',
    to:'/music11.jpg',
    title: 'SetUp concert',
  },
  {
    img: '/music12.jpg',
    to:'/music12.jpg',
    title: 'crowd concert',
  },  
  {
    img: '/music13.jpg',
    to:'/music13.jpg',
    title: 'tv set up',
  },  
  {
    img: '/music14.jpg',
    to:'/music14.jpg',
    title: 'HomeDJ',
  },  
  {
    img: '/music15.jpg',
    to:'/music15.jpg',
    title: 'Wedding setup',
  },  
  {
    img: '/music16.jpg',
    to:'/music16.jpg',
    title: 'pool gig',
  },  
  {
    img: '/music17.jpg',
    to:'/music17.jpg',
    title: 'Itacate set up',
  },  
  {
    img: '/music18.jpg',
    to:'/music18.jpg',
    title: 'DJ gear',
  },  
  {
    img: '/music19.jpg',
    to:'/music19.jpg',
    title: 'Mic check',
  },  
  {
    img: '/music20.jpg',
    to:'/music20.jpg',
    title: 'SlimKid',
  },  
  {
    img: '/music21.jpg',
    to:'/music21.jpg',
    title: 'MCees',
  },
  {
    img: '/music22.jpg',
    to:'/music22.jpg',
    title: 'MCees laugh',
  },  
  {
    img: '/music23.jpg',
    to:'/music23.jpg',
    title: 'Exit gig',
  },  
  {
    img: '/music24.jpg',
    to:'/music24.jpg',
    title: 'Home Drumkit',
  },  
  {
    img: '/photo1.jpg',
    to:'/photo1.jpg',
    title: 'Retouche pictures',
  },  
  {
    img: '/photo2.jpg',
    to:'/photo2.jpg',
    title: 'retouche landscape',
  },
  {
    img: '/photo3.jpg',
    to:'/photo3.jpg',
    title: 'retouche portrait B&W',
  },
  {
    img: '/gear1.jpg',
    to:'/gear1.jpg',
    title: 'mixing board for rent',
  },
  {
    img: '/gear2',
    to:'/gear2.jpg',
    title: 'speaker for rent',
  },

];