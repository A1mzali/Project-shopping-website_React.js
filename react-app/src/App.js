import React from "react";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Baner from "./components/baner/Baner";




function App() {
  return (
    <div className="App">
      <Header />
      <Promo/>
      <Brands/>
      <Arrivals />
      <Baner/>
    </div>
  );
}

export default App;
