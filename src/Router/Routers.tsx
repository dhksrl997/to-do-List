import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MyTask from "../Pages/MyTask";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<MyTask/>}/>
                <Route path={'/hello'} element={<h1>hello world !</h1>}/>
            </Routes>
        </Router>
    )
}

export default Routers;