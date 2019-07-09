import React from "react";
import PropTypes from "prop-types";

export default function Seating(props) {
  return (
    <div>
      <h1>SOLD OUT - CHUMPS!</h1>
      {props.ticketList.map((ticket, index) =>
        <div key={index}> 
          <h2>{ticket.eventType}</h2>
          <h3>{ticket.event}, {ticket.date}</h3>
          <h4>Votes: {ticket.votes}</h4>
          <button onClick={() => props.onUpVote(ticket)}>UpVote</button>
          <button onClick={() => props.onDownVote(ticket)}>DownVote</button>
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
