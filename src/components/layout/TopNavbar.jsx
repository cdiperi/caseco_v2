// src/components/layout/TopNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const TopNavbar = () => {
    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Blog', path: '/blog' },
        { title: 'News', path: '/news' },
        { title: 'Events', path: '/events' },
        { title: 'Links', path: '/links' },
        { title: 'Downloads', path: '/downloads' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact Us', path: '/contact' },
        { title: 'Buy Now', path: '/buy' },
    ];

    return (
        <nav className="bg-primary text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <Home className="h-8 w-8" />
                        <span className="font-bold text-xl">caseco</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;  // Make sure this line exists!