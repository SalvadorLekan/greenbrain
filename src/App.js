import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import Login from './routes/Login';
import SignUp from './routes/SignUp';

function App() {
  return (
<Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App
