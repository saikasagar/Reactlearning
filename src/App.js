import dom from "dom";
import React from "react";
import "./Todo";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./Login";
import Todo from "./Todo";
// import ReactDOM from "react-dom";
function App() {
    // React States
    // React States


    return (
         < Router >
        <Routes >
        <Route element = { <Login/> } path = "" />
        <Route element = { <Todo/> } path = "/todo" />
        </Routes>
         </Router>

    );
}

export default App;