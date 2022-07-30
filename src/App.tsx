import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import {Navigation} from './components/Navigation'
import ArtworksPage from "./pages/ArtworksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import ArtworkDetailPage from "./pages/ArtworkDetailPage";
import {useSelector} from "react-redux";
import {useAppSelector} from "./hooks/redux";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/artworks" element={<ArtworksPage />}/>
                <Route path="/artworks/:id" element={<ArtworkDetailPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/favourites" element={<FavouritesPage />}/>
            </Routes>
        </>
    )
}

export default App
