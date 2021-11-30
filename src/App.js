import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< Updated upstream
import { Navigation, Footer, Home, About, Catering, Menu, Order, Cart } from "./components";
=======
import { Navigation, Footer, Home, About, Catering, Menu, Order, Cart, Checkout } from "./components";

>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/catering" exact component={() => <Catering />} />
          <Route path="/menu" exact component={() => <Menu />} />
          <Route path="/order" exact component={() => <Order />} />
          <Route path="/cart" exact component={() => <Cart />} />
          <Route path="/checkout" exact component={() => <Checkout />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;