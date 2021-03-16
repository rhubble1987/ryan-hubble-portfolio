import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";


function App() {
  return (
   <Router basename="/">
     <Header/>
      <main className="px-2">
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/resume" component={Resume}/>
      </main>
     <Footer/>
   </Router>
  );
}

export default App;
