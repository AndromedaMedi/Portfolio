import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';


const Portfolio = () => {

    const projects = [
        {id:1, title: "Travel Bucket List", type: "Solo Project", tools: "Python | Flask | PSQL", url: "link"},
        {id:2, title: "Unknown", type: "Group Project", tools: "React | API", url: "link"}
    ]



    return (
        <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects projects={projects}/> } />
                <Route path="/contact" element={ <Contact/> } />
                <Route path="/project1" element={ <Project1/> } />
                <Route path="/project2" element={ <Project2/> } />
                <Route path="/project3" element={ <Project3/> } />
            </Routes>
        </Router>
        </>
    );

};

export default Portfolio;