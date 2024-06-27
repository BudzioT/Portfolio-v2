import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>

              <Route path="/projects" element={<ProjectView/>}></Route>
          </Routes>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
