import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import './App.css';
// import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <header id="header">
        <Link to="/">
          <button id="button1">Home</button>
        </Link>
        <Link to="/about">
          <button id="button2">About</button>
        </Link>
        <Link to="/works">
          <button id="button3">Works</button>
        </Link>
        <Link to="/contact">
          <button id="button4">Contact</button>
        </Link>

<hr>
</hr>
      </header>
      <body onload="document.body.className += ' loaded';" class="fadein">

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            {/* <Route path="/contact" component={Contact} */}
            {/* <Route component={NotFound} /> */}
          </Switch>


        </main>
      </body>

    </Router>
  );
}

window.onload = function () {
  document.body.className += " loaded";
}

export default App;
