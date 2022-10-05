import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import ficheEleve from './screens/ficheEleve';

function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={ficheEleve} />
       </Switch>
     </Router>
  );
}

export default App;
