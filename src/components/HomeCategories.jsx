import React from 'react';
import Category from './Category';
import football from './../img/football.jpg';
import music from './../img/music.png';
import basketball from './../img/basketball.png';
import soccer from './../img/soccer.jpg';

const categoryList = [
  {
    id: 1,
    name: 'Sports',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
  },
  {
    id: 2,
    name: 'Music',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
  },
  {
    id: 3,
    name: 'Popular this Weekend',
    img: [
      basketball,
      football,
      soccer,
      music
    ]
       
  },
  {
    id: 4,
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
      {categoryList.map((category) =>
        <Category
          name = {category.name}
          img = {category.img}
          key = {category.id}
        />
      )}
    </div>
  );
}
