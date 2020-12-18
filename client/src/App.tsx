import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/globals/Header';
import { Top } from './pages';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="my-4 mx-20 md:mx-16">
          <Switch>
            <Route path="/">
              <Top />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
