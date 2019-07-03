import React from 'react';
import PropTypes from 'prop-types';

export default function Category(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <img src={props.img} alt=""/>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};