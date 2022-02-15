import './App.css';
import NavBarComp from './Components/NavBarComp';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
     
       <NavBarComp/>
      <Switch>
        <Route path = "/" exact component={Home}  />
      </Switch>
      
      </header>
    </div>
    </Router>
  );
}

export default App;
