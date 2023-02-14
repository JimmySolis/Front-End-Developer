import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// Home-Directory Pages
import Home from "./components/pages/Home";
import FrontEnd from "./components/pages/FrontEnd";
import BackEnd from "./components/pages/BackEnd";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
// Front-End Pages
import Blg from "./components/frontPages/Blg";
import Del from "./components/frontPages/Del";
import Mrk from "./components/frontPages/Mrk";
import Old from "./components/frontPages/Old";
import Quz from "./components/frontPages/Quz";
import Wtw from "./components/frontPages/Wtw";
// Back-End Pages
import MySocial from "./components/backPages/backEndMySocial";
import Listed from "./components/backPages/backEndListed";
import BackOfShop from "./components/backPages/backEndBackOfShop";
import TechBlog from "./components/backPages/backEndTecBlogging";



function App() {
const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <Routes location={location} key={location.pathname}>

    <Route path="/Front-End-Developer" element={<Home />}>
    </Route>

    <Route path="/FrontEnd"  element={<FrontEnd />}>
    </Route>

    <Route path="/BackEnd" element={<BackEnd />}>
    </Route>

    <Route path="/Contact" element={<Contact />}>
    </Route>

    <Route path="/About" element={<About />}>
    </Route>

    <Route path="/Blg" element={<Blg />}>
    </Route>

    <Route path="/Del" element={<Del />}>
    </Route>

    <Route path="/Mrk" element={<Mrk />}>
    </Route>

    <Route path="/Old" element={<Old />}>
    </Route>

    <Route path="/Quz" element={<Quz />}>
    </Route>

    <Route path="/Wtw" element={<Wtw />}>
    </Route>

    <Route path="/MySocial" element={<MySocial />}>
    </Route>

    <Route path="/Listed" element={<Listed />}>
    </Route>

    <Route path="/TechBlog" element={<TechBlog />}>
    </Route>

    <Route path="/BackOfShop" element={<BackOfShop />}>
    </Route>
    
    
    </Routes>
    </AnimatePresence>
  );
}

export default App;
