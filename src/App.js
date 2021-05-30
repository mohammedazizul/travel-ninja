import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About/About';
import Bookings from './components/Bookings/Bookings/Bookings';
import Favorite from './components/Favorite/Favorite/Favorite';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <PrivateRoute path='/bookings'>
          <Bookings />
        </PrivateRoute>
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
    </UserContext.Provider>
  );
}

export default App;
