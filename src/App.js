import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Classes from './components/Classes/Classes';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; // Assuming you have a Footer component
import LandingBanner from './components/LandingBanner/LandingBanner';
import HomeClass from './components/Classes/Classes';
import Location from './components/Location/Location';
import Overview from './components/Overview/Overview';
import Social from './components/Social/Social';
import Scheduler from './components/Schedule/Scheduler';
import MuayThaiPage from './pages/Muay-Thai/muay-thai-page';
import HomePage from './pages/Home/home-page';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path ='/home' element = {<HomePage />} />
                    <Route path ='/muay-thai' element = {<MuayThaiPage />} />
                </Routes>

            </div>
        </Router>
    );
};

export default App;