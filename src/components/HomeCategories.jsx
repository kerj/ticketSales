import React from 'react';
import Category from './Category';
import football from './../img/football.jpg';
import music from './../img/music.png';
import basketball from './../img/basketball.png';
import soccer from './../img/soccer.jpg';

const categoryList = [
  {
    name: 'Sports',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
  },
  {
    name: 'Music',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
  },
  {
    name: 'Popular this Weekend',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
       
  },
  {
    name: 'Top Teams',
    img: [
      basketball,
      football,
      soccer,
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
