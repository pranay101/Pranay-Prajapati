import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/"} element={ <Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
