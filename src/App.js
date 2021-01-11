import React from 'react';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      

      {/* Header */}
      

      <Router>
        
         <Switch>
         
         <Route path="/chat/:person">
             <Header backButton="/chat" />
             <ChatScreen />
          </Route>

          <Route path="/chat">
             <Header backButton="/" />
             <Chats />
          </Route>

          <Route path="/">
             <Header />
             <TinderCards />
             <SwipeButtons />
          </Route>

        </Switch>
      </Router>
 
    </div>
  );
}


export default App;






