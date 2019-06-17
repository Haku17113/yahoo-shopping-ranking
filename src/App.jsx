import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Ranking from './containers/Ranking';
import Navi from './containers/Navi';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Yahoo! ショッピングランキング
          </Typography>
        </Toolbar>
      </AppBar>

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
