import React from "react";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
       <div className="bg-slate-900"> 
          <Navbar/>
       </div>
       <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/cart" element={<Cart/>}  />
       </Routes>

       <div className=" flex flex-wrap items-center justify-center font-bold text-md mt-5 mb-5 md:text-3xl " >
          <p>Made with ❤️ - Vivek Chaudhary</p>
      </div>

    </div>
  );
};

export default App;
