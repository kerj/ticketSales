import React from 'react';
import Header from './Header';
import Home from './Home';
import Seating from './Seating';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [
        {
          id: 1,
          event: 'The Misfats',
          eventType: 'music',
          date: '11-1-19',
          votes: '0'
        },
        {
          id: 2,
          event: 'Trailblazers vs Cowboys',
          eventType: 'sport',
          date: '10-5-19',
          votes: '0'
        },
        {
          id: 3,
          event: 'Cowboys vs Reds',
          eventType: 'sport',
          date: '4-4-19',
          votes: '0'
        },
        {
          id: 4,
          event: 'Insect Warfare',
          eventType: 'music',
          date: '6-5-19',
          votes: '0'
        },
        {
          id: 5,
          event: 'Baseball vs Football',
          eventType: 'sport',
          date: '10-5-666',
          votes: '0'
        },
        {
          id: 6,
          event: 'Soccor vs Log Throwing',
          eventType: 'sport',
          date: '10-999-19',
          votes: '0'
        }
      ]
    };
    console.log(this.state);
    
    this.handleAddingNewTicket = this.handleAddingNewTicket.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  // maybe useless... unless we add new tickets
  handleAddingNewTicket(newTicket) {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleUpVote(ticket) {
    ticket.votes++;
    this.setState(this.state.masterTicketList.ticket.votes);
  }

  render(){
    return (
      <div>
        <style global jsx>{`
          h2 {
            text-align: center;
          }
          span {
            text-align: center;
          }
        `}
        </style>
        <Header />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/seating' component = {Seating} />
        </Switch>
      </div>
    );
  }
}

export default App;