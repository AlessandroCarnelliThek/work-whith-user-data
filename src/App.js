import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import { Intro, Main } from './components/Loading.js'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="header"></div>

        <div className="nav">
          <UserList />
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/main" component={Main} />
            <Route path="/:id" component={UserProfile} />
          </Switch>

        </div>

        <div className="footer"></div>
      </div>
    </Router>

  );
}

export default App;
