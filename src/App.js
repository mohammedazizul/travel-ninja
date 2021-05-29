import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Bookings from './components/Bookings/Bookings/Bookings';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';


function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/bookings'>
          <Bookings />
        </Route>
        <Route path='/favorite'>
          <Home />
        </Route>
        <Route path='/about'>
          <Home />
        </Route>
        <Route path='/login'>
          <Home />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
