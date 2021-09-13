import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import SearchPage from './Components/SearchPage/SearchPage';
function App() {
  return (
    <Router>
        <Header />
        <Switch>
             <Route exact path="/">
                 <Home />
             </Route>
             <Route exact path="/search">
                 <SearchPage />
             </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
