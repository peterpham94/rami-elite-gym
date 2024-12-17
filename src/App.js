import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
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