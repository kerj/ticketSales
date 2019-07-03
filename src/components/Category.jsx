import React from 'react';
import PropTypes from 'prop-types';

export default function Category(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        {props.img.map((image, index)=>{
          if(index === props.img.length-1) {
            return <img src={image} alt="last image"/>;
          } else{
            return <img src={image} alt=""/>;
          }
        }
        )}
        
      </div>
      <hr/>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired
};