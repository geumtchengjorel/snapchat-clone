import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
              dispatch(login({
                  username: authUser.displayName,
                  profilePic: authUser.photoURL,
                  id: authUser.uid,
              }));
          }
          else {
              dispatch(logout());
          }
      });
      return unsubscribe;
      
  }, []);

  return (
    <div className="app">
       <Router>
         {!user ? (
           <Login />
         ): (
           <div className="app__body">
            <Switch>
              <Route path="/test">
                <h1>Yeah Man</h1>
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
              <Route exact path="/preview">
                <Preview />
              </Route>
              <Route exact path="/chats">
                <Chats />
              </Route>
              <Route path="/chats/view">
                <ChatView />
              </Route>
            </Switch>
          </div>
         )}
          
        </Router>
    </div>
  );
}

export default App;
