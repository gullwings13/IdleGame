import React from 'react';
import './styles/style.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Stats from './components/shared/Stats';
import ActiveBattle from './components/pages/ActiveBattle';
import ActiveSelection from './components/pages/ActiveSelection';
import GoldStore from './components/pages/GoldStore';
import Idle from './components/pages/Idle';
import KarmaStore from './components/pages/KarmaStore';
import Options from './components/pages/Options';

function App() {
  return (
    <div>
      <Nav/>
      <Stats/>
      <Switch>
        <Route exact path="/" render={(props) => (<Idle {...props} />)} />
        <Route exact path="/options" render={(props) => (<Options {...props} />)} />
        <Route exact path="/select" render={(props) => (<ActiveSelection {...props} />)} />
        <Route exact path="/battle" render={(props) => (<ActiveBattle {...props} />)} />
        <Route exact path="/karma" render={(props) => (<KarmaStore {...props} />)} />
        <Route exact path="/gold" render={(props) => (<GoldStore {...props} />)} />
      </Switch> 
      </div>
  );
}

export default withRouter(App);
