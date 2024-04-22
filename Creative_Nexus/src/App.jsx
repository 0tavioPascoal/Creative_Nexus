//imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home/Home";
import Models from "./Pages/3dModels/Models";
import Designs from "./Pages/Designs/Designs";
import Plugins from "./Pages/PagePlugins/Plugin";
import Builds from "./Pages/PageBuilds/Builds";
import Contact from "./Pages/Contact/Contact";

//components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/3dModels" element={<Models />} />
            <Route path="/Designs" element={<Designs />} />
            <Route path="/Plugins" element={<Plugins />} />
            <Route path="/Builds" element={<Builds />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
