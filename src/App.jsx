import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TapeswitchQuickReferences from './pages/TapeswitchQuickReferences';
import Links from './pages/Links';
import About from './pages/About';
import BuyNow from './pages/buy';
import Downloads from './pages/downloads';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tapeswitch-quick-references" element={<TapeswitchQuickReferences />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/buy" element={<BuyNow />} />
                    <Route path="/downloads" element={<Downloads />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;