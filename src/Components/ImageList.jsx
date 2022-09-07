import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function ListImg() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img: './images/music0.jpg',
    title: 'festival',
  },
  {
    img: './images/music1.jpg',
    title: 'Drummer',
  },
  {
    img: './images/music2',
    title: 'concert',
  },
  {
    img: './images/music3',
    title: 'crowd',
  },
  {
    img: './images/music4',
    title: 'jamsession',
  },
  {
    img: './images/music5',
    title: 'portrait',
  },
  {
    img: './images/music6',
    title: 'JamSessions',
  },
  {
    img: './images/music7',
    title: 'DJ',
  },
  {
    img: './images/music8',
    title: 'gala',
  },
  {
    img: './images/music9',
    title: 'TVshow',
  },
  {
    img: './images/music10',
    title: 'Concert',
  },
  {
    img: './images/music11',
    title: 'SetUp concert',
  },
  {
    img: './images/music12',
    title: 'crowd concert',
  },  
  {
    img: './images/music13',
    title: 'tv set up',
  },  
  {
    img: './images/music14',
    title: 'HomeDJ',
  },  
  {
    img: './images/music15',
    title: 'Wedding setup',
  },  
  {
    img: './images/music16',
    title: 'pool gig',
  },  
  {
    img: './images/music17',
    title: 'Itacate set up',
  },  
  {
    img: './images/music18',
    title: 'DJ gear',
  },  
  {
    img: './images/music19',
    title: 'Mic check',
  },  
  {
    img: './images/music20',
    title: 'SlimKid',
  },  
  {
    img: './images/music21',
    title: 'MCees',
  },
  {
    img: './images/music22',
    title: 'MCees laugh',
  },  
  {
    img: './images/music23',
    title: 'Exit gig',
  },  
  {
    img: './images/music24',
    title: 'Home Drumkit',
  },  
  {
    img: './images/photo1',
    title: 'Retouche pictures',
  },  
  {
    img: './images/photo2',
    title: 'retouche landscape',
  },
  {
    img: './images/photo3.jpg',
    title: 'retouche portrait B&W',
  },
  {
    img: './images/gear1.jpg',
    title: 'mixing board for rent',
  },
  {
    img: './images/gear2',
    title: 'speaker for rent',
  },

];