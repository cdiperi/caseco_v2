import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const SideNavbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    let hideTimeout; // To delay hiding submenus

    const navItems = {
        Applications: [
            { title: 'Measurement Light Curtains', link: '/measurement-light-curtains' },
            { title: 'Collision Sensing Bumpers', link: 'https://www.tapeswitch.com/bumpers.html' },
            { title: 'Controflex Ribbon Switch', link: '/controflex-ribbon-switch' },
            { title: 'Electric Safety Edge Guards', link: '/electric-safety-edge-guards' },
            {
                title: 'Electrical Mats',
                subitems: [
                    { title: 'Tapeswitch', link: '/electrical-mats/tapeswitch' },
                    { title: 'LMI', link: '/electrical-mats/lmi' }
                ],
            },
            { title: 'Measuring and Inspection Systems', link: '/measuring-inspection-systems' },
            {
                title: 'Light Curtains',
                subitems: [
                    { title: 'EOS-4', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/48-eos4-en' },
                    { title: 'Admiral', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/49-admiral-en' },
                    { title: 'SafeGate', link: 'https://www.reersafety.com/us/en/products/safety-light-curtains/item/430-safegate-en' }
                ],
            },
            { title: 'Safety Relays', link: 'https://www.tapeswitch.com/sim.html' },
            {
                title: 'Safety Interlock Switches',
                subitems: [
                    { title: 'Mechanical Keyed Type', link: 'https://www.reersafety.com/us/en/products/safety-interlock/item/924-safelock-en' },
                    { title: 'Electronic and Magnetic Type', link: 'https://www.mechancontrols.com/products/o-type/' }
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

    return (
        <nav className="w-64 bg-gray-100 min-h-screen p-4 text-sm">
            {Object.entries(navItems).map(([section, items]) => (
                <div key={section} className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">{section}</h2>
                    <ul>
                        {items.map((item) => (
                            <li
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => {
                                    clearTimeout(hideTimeout);
                                    setHoveredItem(item.title);
                                }}
                                onMouseLeave={() => {
                                    hideTimeout = setTimeout(() => setHoveredItem(null), 300);
                                }}
                            >
                                <div className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer">
                                    {item.isInternal ? (
                                        <Link to={item.link} className="block">
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                            {item.title}
                                        </a>
                                    )}
                                    {item.subitems && <ChevronDown className="ml-2 h-4 w-4" />}
                                </div>

                                {/* Subitems */}
                                {hoveredItem === item.title && item.subitems && (
                                    <ul
                                        className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-md p-2"
                                        onMouseEnter={() => clearTimeout(hideTimeout)}
                                        onMouseLeave={() => hideTimeout = setTimeout(() => setHoveredItem(null), 300)}
                                    >
                                        {item.subitems.map((subitem) => (
                                            <li key={subitem.title} className="py-1 px-4 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                                                {subitem.isInternal ? (
                                                    <Link to={subitem.link} className="block">
                                                        {subitem.title}
                                                    </Link>
                                                ) : (
                                                    <a href={subitem.link} target="_blank" rel="noopener noreferrer" className="block">
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
    );
};

export default SideNavbar;
