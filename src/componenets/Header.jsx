import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Header(){
    return(
            <BrowserRouter>
            <div class="flex justify-evenly items-center w-dvw h-[20dvh] ibshadow text-white bg-black">
                <Link to="/">Home</Link>
                <Link to="/exp">Experience</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exp" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </BrowserRouter> 
    );
}