import React from 'react';
import Category from './Category';
import football from './../img/football.jpg';
import music from './../img/music.png';
import basketball from './../img/basketball.png';
import soccor from './../img/soccor.jpg';

const categoryList = [
  {
    name: 'Sports',
    img: basketball
  },
  {
    name: 'Music',
    img: music
  },
  {
    name: 'Popular this Weekend',
    img: football
  },
  {
      name: 'Top Teams',
      img: soccor
  }
];

export default function HomeCategories() {
  return (
    <div>
      {categoryList.map((category, index) =>
        <Category
          name={category.name}
          img={category.img}
          key={index}
        />
      )}
    </div>
  );
}
