import React from 'react';
import Category from './Category';
import football from './../img/football.jpg';
import music from './../img/music.png';
import basketball from './../img/basketball.png';
import soccor from './../img/soccor.jpg';

const categoryList = [
  {
    name: 'Sports',
    img: [
      basketball,
      football,
      soccor
    ]
  },
  {
    name: 'Music',
    img: [
      music,
      soccor
    ]
  },
  {
    name: 'Popular this Weekend',
    img: [
      football,
      basketball
    ]
       
  },
  {
    name: 'Top Teams',
    img: [
      soccor,
      music
    ]
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
