import "./assets/style.css";
import "./assets/front.css";
import "./assets/back.css";
import "./assets/about.css"
import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/pages/Home";
import FrontEnd from "./components/pages/FrontEnd";
import BackEnd from "./components/pages/BackEnd";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Blg from "./components/pages/Blg";
import Del from "./components/pages/Del";
import Mrk from "./components/pages/Mrk";
import Old from "./components/pages/Old";
import Quz from "./components/pages/Quz";
import Wtw from "./components/pages/Wtw";
import MySocial from "./components/pages/backEndMySocial";
import Listed from "./components/pages/backEndListed";
import BackOfShop from "./components/pages/backEndBackOfShop";
import TechBlog from "./components/pages/backEndTecBlogging";



function App() {
const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <Routes location={location} key={location.pathname}>

    <Route path="/" element={<Home />}>
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
