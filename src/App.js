import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import AboutScreen from "./screens/AboutScreen";
import SearchScreen from "./screens/SearchScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            
            <header>
              
              <Link to="/">BRAND</Link>
              
            <Link to="/home"><i class="bi bi-house-door-fill icon"></i></Link>
              <Link to="/about">About</Link>
              <div className ="admin">
                <Link to="/admin">Orders</Link>
                </div>
              <SearchScreen />
            </header>
            
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route path="/home" component={HomeScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All right is reserved.

            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;