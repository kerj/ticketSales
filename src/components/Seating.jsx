import React from "react";
import Proptypes from "prop-types";

export default function Seating(props) {
  return (
    <div>
      <h1>SOLD OUT - CHUMPS!</h1>

      <button onClick={() => props.onUpVote(this)}>UpVote</button>
      <button onClick={() => props.onDownVote(this)}>DownVote</button>
    </div>
  );
}

Seating.propTypes = {
  onUpVote: Proptypes.func,
  onDownVote: Proptypes.func
};
