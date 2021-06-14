import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/signup" >
        <Signup />
      </Route>
      <Route path="/login" >
        <Login />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
      <Route path="/create" >
        <CreatePost />
      </Route>

    </div>
  );
}

export default App;
