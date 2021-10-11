
import './App.css';

import Accomplishments from "./components/Accomplishments";
import Bio from "./components/Bio";
import Home from './components/Home';
import { Link, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header className="navbar">
     
      <span><Link to='/Bio'>Work History</Link></span>
      <span><Link to='/Home'>Skills</Link></span>
      <span><Link to='/Accomplishments'>Projects</Link></span>
      </header>
      {/* <img src="https://www.daxx.com/uploads/full%20stack%20development%20venn.jpg" className="fullstack" alt="nologo"/>  */}

      <h1 className="title">Louis Thomas</h1>
      <Route path='/Accomplishments' exact component={Accomplishments}/>
      <Route path='/Bio' exact component={Bio}/>
      <Route path='/Home' exact component={Home}/>

    </div>
  );
}

export default App;
