import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import LectureNote from './routes/LectureNote';
import Login from './routes/Login';
import PastQuestion from './routes/PastQuestion';
import Projects from './routes/Projects';
import SignUp from './routes/SignUp';

function App() {
  return (
<Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup" component={SignUp}/>
          <Route path="/lecturenote" component={LectureNote}/>
          <Route path="/pastquestions" component={PastQuestion}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App
