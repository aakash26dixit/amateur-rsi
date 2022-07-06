import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {Switch, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Rsi from './components/Rsi';
import Closing from './components/api';
import BeforeRsi from './components/BeforeRsi';
  
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/Signin" component={Signin}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/presentation" component={Presentation}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Rsi" component={Rsi}/>
        <Route exact path="/BeforeRsi" component={BeforeRsi}/>
        <Route exact path="/api" component={Closing}/>
      </Switch>
</div>
  )
}

export default App;