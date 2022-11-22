import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import NotFound from './components/Navigation/NotFound';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>

        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: 'center' }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                Hello SteVie T
              </p>
              <Home />
            </header>

            <div className='content-right'>
              <AddNewProduct />
            </div>
          </div>
        </Route>

        <Route path="/product">
          <Product />
        </Route>

        <Route path="/weather">
          <Weather />
        </Route>

        <Route path="/otp">
          <OTP />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
