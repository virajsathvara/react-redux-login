import Login from './components/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Profile from './components/profile';
import Layout from './components/layout';
import AddProduct from './components/addProduct';

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;