import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageCollage() {
  return (
    <ImageList
      sx={{ width: 300, height: 350 ,marginLeft:1}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
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
    img: 'https://safarmarket.com/blog/data/uploaded_files/69ad21dbce242483f9031019.jpg',
    title: 'Milad Tower',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://shadmag.com/wp-content/uploads/2022/05/yeylaghate-shomale-iran-1024x804-1.jpg',
    title: 'Gilan Province',
  },
  {
    img: 'https://funibo.com/wp-content/uploads/2020/03/f-Iran-Turism-Shiraz-Hafezie.jpg',
    title: 'Tomb of Hafez',
  },
  {
    img: 'https://files.asemooni.com/storage/cdn/2018/05//Domestic-animals-and-Iran-wildlife-640x480.jpg',
    title: 'Iranian cheetah',
    cols: 2,
  },
  {
    img: 'https://www.jabama.com/mag/wp-content/uploads/2020/06/similarity-of-the-sights-of-iran-and-the-world07.jpg',
    title: 'Chabahar',
    cols: 2,
  },
  {
    img: 'https://www.destinationiran.com/fa/wp-content/uploads/2020/11/%D9%88%D8%B6%D8%B9%DB%8C%D8%AA-%D8%A2%D8%A8-%D9%87%D9%88%D8%A7-%D8%AF%D9%85%D8%A7%D9%88%D9%86%D8%AF.jpg',
    title: 'Damavand Mountain',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://majigomarket.com/wp-content/uploads/2021/03/%D8%B3%D8%A7%D8%AD%D9%84-%D8%AF%D8%B1%DA%A9.jpg',
    title: 'Coasts of Iran',
  },
  {
    img: 'https://www.proomag.com/wp-content/uploads/2018/11/travel-photography-career-sahara-morocco-camels-hillary-fox-800x600.jpg',
    title: 'The desert of Iran',
  },
  {
    img: 'https://cdn-tehran.wisgoon.com/dlir-s3/10531430143247782615.jpg',
    title: 'Shrine of Imam Reza (AS)',
    rows:2,
    cols:2,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/%D8%BA%D8%B1%D9%88%D8%A8_%D8%AA%D8%AE%D8%AA_%D8%AC%D9%85%D8%B4%DB%8C%D8%AF_%D8%B9%DA%A9%D8%B3.jpg',
    title: 'Persepolis',
  },
  {
    img: 'https://digiatour.ir/wp-content/uploads/2021/02/esfahan-sights.jpg',
    title: 'Se-o-se-pol Bridge',
  },
  {
    img: 'https://www.iranhotelonline.com/images/EditorUpload/1386.jpg',
    title: 'Imam square',
    cols: 2,
  },
];
