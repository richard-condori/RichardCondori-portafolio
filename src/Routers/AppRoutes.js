import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "../Components/Navbar/MyNavbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Proyects from "../Pages/Proyects";
import Experience from "../Pages/Experience";
import Education from "../Pages/Education";
import Contact from "../Pages/Contact";


const AppRoutes = () => {
    return (
        <Router>
            <MyNavbar />    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
                <Route exact path="/aboutme" element={<About />} /> 
                <Route exact path="/skills"element={<Skills />} />
                <Route exact path="/proyects" element={<Proyects />} />
                <Route exact path="/experience" element={<Experience />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes