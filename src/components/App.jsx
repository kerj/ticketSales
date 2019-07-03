import React from 'react';
import Header from './Header';
import Home from './Home';
import Seating from './Seating';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <style global jsx>{`
        h2 {
          text-align: center;
        }
        span {
          text-align: center;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seating' component={Seating} />
      </Switch>
    </div>
  );
}

export default App;