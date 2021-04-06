import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import Partners from "./components/Partners/Partners";
import Contacts from "./components/Contacts/Contacts";

// import "./components/Hexagon/Hexagon.scss";
import "./App.scss";
// import Hexagon from "./components/Hexagon/Hexagon";

const App = () => {
  function handleClick(e) {
    let div = document.querySelector(".contant");
    let nav = document.querySelector("nav");
    // console.log(div);
    // console.log(nav.classList);
    if (e.target.tagName === "IMG") {
      nav.classList.remove("menu-start");
      nav.classList.add("menu");
      // nav.classList.toggle("menu-start", "menu");
      div.classList.remove("none");
    }
  }
  return (
    <div className="container">
      <Router>
        {/* <nav className="menu"> */}
        <nav className="menu-start">
          <ul id="hexGrid" onClick={handleClick}>
            <li className="hex">
              <Link to="/" className="hexIn">
                <img
                  src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
                  alt=""
                />
                <h1>Головна</h1>
              </Link>
            </li>
            <li className="hex">
              <Link to="/products" className="hexIn">
                <img
                  src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
                  alt=""
                />
                <h1>Продукція</h1>
              </Link>
            </li>
            <li className="hex">
              <Link to="/articles" className="hexIn">
                <img
                  src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
                  alt=""
                />
                <h1>Статьи</h1>
              </Link>
            </li>
            <li className="hex">
              <Link to="/partners" className="hexIn">
                <img
                  src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
                  alt=""
                />
                <h1>Партнери</h1>
              </Link>
            </li>
            <li className="hex">
              <Link to="/contacts" className="hexIn">
                <img
                  src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                  alt=""
                />
                <h1>Контакти</h1>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="contant none">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/partners">
              <Partners />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
