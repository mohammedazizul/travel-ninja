import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About/About';
import Bookings from './components/Bookings/Bookings/Bookings';
import Favorite from './components/Favorite/Favorite/Favorite';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
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
          <Favorite />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
