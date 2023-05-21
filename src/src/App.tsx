// Import necessary modules from the 'react' and 'react-router-dom' packages.
import React from "react";
import { BrowserRouter as Router, Route, useNavigate, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import custom components and data types.
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreditsPage from './pages/CreditsPage';
import Footer from './components/Footer';
import Navigation from "./components/Navigation";
import Language from './types/Language';
import Banner from "./components/Banner";

//import logo from './logo.svg';
import './App.scss';

// Define some sample language data to use with the Navigation component.
const sampleData: Language[] = [new Language("Klingon", 0, "ConLang"), new Language("Proto-Indo-European", 1, "ProtoLang")];

// Define the main App component.
function App() {

    // Use the 'useState' hook to define a state variable called 'language', and a function to update it called 'setLanguage'.
    // Set the initial value of the 'language' variable to 'Klingon'.
    const [language, setLanguage] = useState('Klingon');

    // Render the main app content inside a React fragment.
    return (
        <>
            <main>
                {/* Set up a 'Router' component from 'react-router-dom' to handle navigation between pages. */}
                <Router>
                    {/* Render a 'Banner' component with a blue background and the text 'Speech Synthesis'. */}
                    <Banner bg="primary">Speech Synthesis</Banner>

                    {/* Render a 'Navigation' component with a dark background, the sample language data, and functions to handle language selection. */}
                    <Navigation bgColor={"dark"} languages={sampleData} language={"Klingon"} defaultLanguageId={0} setLanguage={setLanguage} />

                    {/* Define the page routes for the app using the 'Routes' component from 'react-router-dom'. */}
                    <Routes>
                        {/* Define a route for the home page that renders the 'HomePage' component and passes in the current 'language' state variable. */}
                        <Route path="/" element={<HomePage language={language} />} />

                        {/* Define a route for the about page that renders the 'AboutPage' component. */}
                        <Route path="/about" element={<AboutPage />} />

                        {/* Define a route for the credits page that renders the 'CreditsPage' component. */}
                        <Route path="/credits" element={<CreditsPage />} />
                    </Routes>
                </Router>
            </main>

            {/* Render a 'Footer' component at the bottom of the app. */}
            <Footer />
        </>
    );
}

// Export the 'App' component as the default export of the module.
export default App;
