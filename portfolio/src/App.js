import React from 'react';
import Title from './Components/Title'
import Body from './Components/Body'
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import WhatToWear from './Pages/whattowear';



class App extends React.Component  {

  componenDidMount() {
    this.props.history.push('/home');
 }

  render() {
    return (
      <div>
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
