import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";


function App() {
  return (
   <Router>
     <Header/>
      <main className="px-2">
      <Route exact path="/" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/resume" component={Resume}/>
      </main>
     <Footer/>
   </Router>
  );
}

export default App;
