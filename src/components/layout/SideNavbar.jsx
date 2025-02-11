import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';

const SideNavbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItemY, setHoveredItemY] = useState(0);
    let hideTimeout; // To delay hiding submenus

    const navItems = {
        Applications: [
            { title: 'Measurement Light Curtains', link: 'https://www.reersafety.com/us/en/products/measurement-sensors/item/66-micron-en' },
            { title: 'Collision Sensing Bumpers', link: 'https://www.tapeswitch.com/bumpers.html' },
            { title: 'Controflex Ribbon Switch', link: 'https://www.tapeswitch.com/ribbon-switches.html' },
            { title: 'Electric Safety Edge Guards', link: 'https://www.tapeswitch.com/sensing-edges.html' },
            {
                title: 'Electrical Mats',
                subitems: [
                    { title: 'Tapeswitch', link: 'https://www.tapeswitch.com/safety-mats.html' },
                    { title: 'LMI', link: 'http://www.londonmat.com/mats/zone.html' }
                ],
            },
            { title: 'Measuring and Inspection Systems', link: 'https://www.micro-epsilon.com/measurement-systems/Kunststoff-Inspektion/' },
            {
                title: 'Light Curtains',
                subitems: [
                    { title: 'EOS-4', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/48-eos4-en' },
                    { title: 'Admiral', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/49-admiral-en' },
                    { title: 'SafeGate', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/430-safegate-en' },
                    { title: 'Light Curtain Accessories', link: 'https://www.reersafety.com/us/en/products/accessories' },
                    { title: 'Discrete Safety Beams', link: 'https://www.reersafety.com/us/en/products/photocells' },
                    { title: 'Light Curtain Water Tight Enclosures', link: 'https://www.reersafety.com/us/en/products/watertight-enclosures' },
                    { title: 'ATEX – Explosion Environment Enclosures for Light Curtains', link: 'https://www.reersafety.com/us/en/products/atex-light-curtains' },
                    { title: 'Type 2 Slim Light Curtain', link: 'https://www.reersafety.com/us/en/products/measurement-sensors/item/66-micron-en' },
                    { title: 'Muting Photocells', link: 'https://www.reersafety.com/us/en/products/muting-photocell-en' },
                    { title: 'SAFECODER – Safety Rated Encoder', link: 'https://www.reersafety.com/us/en/products/safety-encoders' }
                ],
            },
            { title: 'Safety Relays', link: 'https://www.tapeswitch.com/sim.html' },
            {
                title: 'Safety Interlock Switches',
                subitems: [
                    { title: 'Mechanical Keyed Type', link: 'https://www.reersafety.com/us/en/products/safety-interlock/item/924-safelock-en' },
                    { title: 'Electronic and Magnetic Type', link: 'https://www.mechancontrols.com/products/o-type/' },
                    { title: 'TRAP-KEY Technology', link: 'http://www.castell.com/us/castell/products.php'}
                ],
            },
            { title: 'E-Stop Control Relays', link: 'https://www.reersafety.com/us/en/products/safety-interfaces' },
        ],
        Manufacturers: [
            { title: 'Castell', link: 'http://www.castell.com/us/castell/products.php' },
            { title: 'Reer Safety', link: 'https://www.reersafety.com/us/en/' },
            { title: 'Kontronik Power Systems', link: 'https://www.kontronik.com/en.html' },
            { title: 'Gordon Engineering', link: 'http://www.gordoneng.com/default.htm' },
            { title: 'London Mat', link: 'http://www.londonmat.com/' },
            { title: 'Mechan Controls', link: 'http://www.mechancontrols.co.uk/' },
            { title: 'Micro Epsilon', link: 'http://www.micro-epsilon.com/index.html' },
            {
                title: 'Tapeswitch',
                subitems: [
                    { title: 'Tapeswitch Corporation', link: 'http://www.tapeswitch.com/index.html' },
                    {
                        title: 'Tapeswitch Quick References',
                        link: '/tapeswitch-quick-references',
                        isInternal: true
                    }
                ],
            },
        ],
    };

    const handleMouseEnter = (event, title) => {
        clearTimeout(hideTimeout);
        setHoveredItem(title);
        setHoveredItemY(event.target.getBoundingClientRect().top); // Get Y position
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsOpen(false); // Close the sidebar on mobile after link click
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-3 bg-gray-200 w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu className="h-6 w-6 inline-block" /> Products
            </button>

            {/* Sidebar */}
            <nav className={`w-64 bg-gray-100 min-h-screen p-4 text-sm transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block fixed md:relative overflow-y-auto h-[100vh] z-50`}>
                {Object.entries(navItems).map(([section, items]) => (
                    <div key={section} className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">{section}</h2>
                        <ul>
                            {items.map((item) => (
                                <li
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={(event) => handleMouseEnter(event, item.title)}
                                    onMouseLeave={() => {
                                        hideTimeout = setTimeout(() => setHoveredItem(null), 300);
                                    }}
                                >
                                    <div className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer">
                                        {item.isInternal ? (
                                            <Link
                                                to={item.link}
                                                className="block"
                                                onClick={handleLinkClick} // Collapse sidebar on click
                                            >
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block"
                                                onClick={handleLinkClick} // Collapse sidebar on click
                                            >
                                                {item.title}
                                            </a>
                                        )}
                                        {item.subitems && <ChevronDown className="ml-2 h-4 w-4" />}
                                    </div>

                                    {/* Subitems */}
                                    {hoveredItem === item.title && item.subitems && (
                                        <ul
                                            className={`absolute left-full ml-1 bg-white shadow-lg rounded-md p-2 transition-all duration-150 ${
                                                window.innerHeight - hoveredItemY < 200 ? 'bottom-0' : 'top-0'
                                            }`}
                                            onMouseEnter={() => clearTimeout(hideTimeout)}
                                            onMouseLeave={() => hideTimeout = setTimeout(() => setHoveredItem(null), 300)}
                                        >
                                            {item.subitems.map((subitem) => (
                                                <li key={subitem.title} className="py-1 px-4 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                                                    {subitem.isInternal ? (
                                                        <Link
                                                            to={subitem.link}
                                                            className="block"
                                                            onClick={handleLinkClick} // Collapse sidebar on click
                                                        >
                                                            {subitem.title}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={subitem.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block"
                                                            onClick={handleLinkClick} // Collapse sidebar on click
                                                        >
                                                            {subitem.title}
                                                        </a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </>
    );
};

export default SideNavbar;