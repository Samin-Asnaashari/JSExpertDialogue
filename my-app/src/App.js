import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import NotFound from "./components/notFound";
import NavBar from "./components/navBar";

/**
 * Install:
 * npm i prop-types
 * npm install @material-ui/core
 * npm install @material-ui/icons
 * npm i react-router-dom
 * npm i react-router-native ??
 * npm i axios
 * npm install node-sass
 */

//  class App extends Component {
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        {/* <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
          <Route path="/fizzBuzz" component={FizzBuzz} />
          <Route path="/pascalTriangle" component={PascalTriangle} />
          <Route path="/tree" component={Tree} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="home" />
          <Redirect from="/not-found" />
        </Switch> */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
