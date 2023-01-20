import React from "react";
import Navbar from "./components/navBar/Navbar";
import './App.css'
import Banner from "./components/banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import {action , originals} from './urls'
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='NetFlix Originals' />
      <Rowpost url={action} title='Netflix' isSmall />
    </div>
  );
}
 
export default App;
 