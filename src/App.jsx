import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TapeswitchQuickReferences from './pages/TapeswitchQuickReferences';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tapeswitch-quick-references" element={<TapeswitchQuickReferences />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;