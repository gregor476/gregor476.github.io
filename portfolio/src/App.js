import React from 'react';
import Title from './Components/Title'
import Body from './Components/Body'
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import MusicMajik from './Pages/musicmagik';
import WhatToWear from './Pages/whattowear';
import PureHoney from './Pages/purehoney';



class App extends React.Component  {

  

  render() {
    return (
      <div>
        <Navbar/>
        <Switch >
          <Route path="/whattowear">
            <WhatToWear/>
          </Route>
          <Route path="/musicmajik">
            <MusicMajik/>
          </Route>
          <Route path="/purehoney">
            <PureHoney/>
          </Route>
          <Route path="/">
            <Title/>
            <Body/>
          </Route>
        </Switch>
        
      </div>
    );
  }
}
//<Navbar/>
export default App;
