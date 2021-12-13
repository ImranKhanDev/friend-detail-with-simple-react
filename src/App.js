import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Friends from "./Component/Friends/Friends";
import NotFound from "./Component/NotFound/NotFound";
import FriendDetail from "./Component/FriendDetail/FriendDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          
          <Route exact path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
