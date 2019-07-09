import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Category(props) {
  return (
    <div>
      <style jsx>{`
      .test {
          display: flex;
          margin: 10px;
          padding: 5%;
          justify-content: space-around;
        }
        img {
            display: flex;
            height: 200px;
            width: 200px;
        }
      `}
      </style>
      <h1>{props.name}</h1>
      <div className = 'test'>
        {props.img.map((image, index) => {
          if (index === props.img.length - 1) {
            return <Link to = '/seating'><img src = {image} alt = "last image" /></Link>;
          } else {
            return <Link to = '/seating'><img src = {image} alt = "" /></Link>;
          }
        }
        )}

      </div>
      <hr />
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired
};