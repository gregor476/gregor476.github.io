import React from 'react';
import Title from './Components/Title'
import Body from './Components/Body'
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import WhatToWear from './Pages/whattowear';
import Navbar from './Components/Navbar';


class App extends React.Component  {

  

  render() {
    return (
      <div>
        <Navbar/>
        <Switch >
          <Route path="/whattowear">
            <WhatToWear/>
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
