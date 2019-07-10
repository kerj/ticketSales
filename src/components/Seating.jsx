import React from "react";
import PropTypes from "prop-types";

export default function Seating(props) {

  let sortedTickeList = props.ticketList.sort(function(a, b){return b.votes - a.votes});

  return (
    <div>
      <h1>EVERYTHING IS SOLD OUT - CHUMPS!</h1>
      {sortedTickeList.map((ticket, index) =>
        <div key={index}> 
          <h4>{ticket.eventType}</h4>
          <h3>{ticket.event}, {ticket.date}</h3>
          <h4>Votes: {ticket.votes}</h4>
          <button onClick={() => props.onUpVote(ticket)}>UpVote</button>
          <button onClick={() => props.onDownVote(ticket)}>DownVote</button>
          <hr/>
        </div>
      )}

    </div>
  );
}


Seating.propTypes = {
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  ticketList: PropTypes.array
};
