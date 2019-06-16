import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ranking from './containers/Ranking';
import Navi from './containers/Navi';

function App() {
  return (
    <div className="App">
      <Navi />

      <Switch>
          <Route exact path="/all" component={Ranking} />
          <Route
            exact path="/category/:id"
            render={
              ({match}) => <Ranking categoryID={match.params.id} />
            }
          />
        </Switch>
    </div>
  );
}

export default App;
