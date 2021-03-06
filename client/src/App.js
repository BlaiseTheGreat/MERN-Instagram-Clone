import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext();


const Routing = () => {
  const history = useHistory();
  const {state, dispatch } = useContext(UserContext);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user) {
      dispatch({type: "USER", payload: user});
    } else {
      history.push('/login');
    }
  }, [])
  return <Switch>
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
  </Switch>
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Navbar />
        <Routing />

      </div>
    </UserContext.Provider>
  );
}

export default App;
