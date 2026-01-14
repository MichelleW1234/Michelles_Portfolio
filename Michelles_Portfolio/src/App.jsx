import {HashRouter, Routes, Route} from "react-router-dom";

import Homescreen from "./components/Homescreen/Homescreen.jsx";
import Arcadescreen from "./components/ProjectScreens/Arcadescreen.jsx";
import TritonTurnUpscreen from "./components/ProjectScreens/TritonTurnUpscreen.jsx";
import Scriptascreen from "./components/ProjectScreens/Scriptascreen.jsx";

import './App.css';

function App() {

  return (

    <HashRouter>
      <Routes>
        <Route index element={<Homescreen/>}/>
          
        <Route path="/home" element={<Homescreen />}/>
        <Route path="/arcade" element={<Arcadescreen/>}/>
        <Route path="/tritonturnup" element={<TritonTurnUpscreen/>}/>
        <Route path="/scripta" element={<Scriptascreen/>}/>

      </Routes>
    </HashRouter>

  )
}

export default App
