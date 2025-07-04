import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router';
import About from './pages/About';
import AppLayout from './components/layout/AppLayout';
import Partner from './pages/Partner';
import Footer from "./components/common/Footer.jsx";
import React from "react";

function App() {
    return (
        <Routes>
            <Route path='/' element={<AppLayout/>}>

                {/* Home page route */}
                <Route index element={<Home/>}/>

                {/* About page route */}
                <Route path='about' element={<About/>}/>
                <Route path='partner' element={<Partner/>}/>
            </Route>
        </Routes>
    );
}

export default App;
