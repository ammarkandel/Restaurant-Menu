import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Meals from './containers/Meals/Meals';
import MealDetails from './containers/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/meals" />
        </Route>
        <Route path="/meals" exact>
          <Meals />
        </Route>
        <Route path="/meals/:id">
          <MealDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
