import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";

import Header from "./components/Header";
import Home from './pages/Home';
import Designs from './pages/Designs';
import Cart from './pages/Cart';
function App() {
  return (
    // provide store to the top component
    <Provider store={store}>
      <Router>
        <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/designs/:id">
                <Designs />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
