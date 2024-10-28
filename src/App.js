import "./App.css";
import Navbar from "./components/Navbar";
import Grade from "./components/Grade";
import Final from "./components/Final";
import Average from "./components/Average";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Grade/>}> </Route>
          <Route path = "/average" element = {<Average/>}> </Route>
          <Route path = "/final" element = {<Final/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
