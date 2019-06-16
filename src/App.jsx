import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Ranking from './components/Ranking';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/all">全てのカテゴリ</Link></li>
        <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
        <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
      </ul>

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
