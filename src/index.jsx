import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Propos from './pages/Propos/a-propos';
import Header from './components/Header/Header';
import Error from './pages/Error/error';
import Footer from './components/Footer/Footer';
import Logement from './pages/Logement/Logement';
import './styles/Index/Index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:idLogement" element={<Logement />} />
                <Route path="/a-propos" element={<Propos />} />
                <Route
                    //Pour toute url différente de ceux au dessus, on passe à la page erreur
                    path="*"
                    element={<Error />}
                />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
);
