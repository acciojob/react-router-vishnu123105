import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const App = () => {
  const About = () => (
    <>
      <h1>About</h1>
      <p1>This is a sample React Router program.</p1>
    </>
  );
  const Home = () => <h1>Welcome to my website!</h1>;
  return (
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
