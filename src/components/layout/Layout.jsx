import React from 'react';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <TopNavbar />
            <div className="flex flex-1">
                <SideNavbar />
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;