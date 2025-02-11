import React from 'react';
import { ExternalLink } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

const ProductCard = ({ title, image, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
        <div className="aspect-square relative overflow-hidden bg-gray-100">
            <img
                src={image}
                alt={title}
                className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-4 flex items-center justify-between bg-white">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
        </div>
    </a>
);

const SectionTitle = ({ title }) => (
    <div className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
);

const Home = () => {
    const featuredTech = [
        {
            title: "DPM Safety Mat",
            image: getImageUrl('featured/dpm_safety_mat.jpg'),
            link: "https://www.tapeswitch.com/mats/dplate.html"
        },
        {
            title: "Programmable Safety Relays",
            image: "/api/placeholder/400/400",
            link: "#safety-relays"
        },
        {
            title: "Thermal Imager",
            image: "/api/placeholder/400/400",
            link: "#thermal-imager"
        },
        {
            title: "DC Motors",
            image: "/api/placeholder/400/400",
            link: "#dc-motors"
        }
    ];

    const precisionSensors = [
        {
            title: "Non-contact Temperature Sensors",
            image: "/api/placeholder/400/400",
            link: "#temp-sensors"
        },
        {
            title: "Laser Sensor Systems",
            image: "/api/placeholder/400/400",
            link: "#laser-sensors"
        },
        {
            title: "Eddy Current Sensors & Measuring Systems",
            image: "/api/placeholder/400/400",
            link: "#eddy-current"
        },
        {
            title: "Capacitive Displacement Measuring Systems",
            image: "/api/placeholder/400/400",
            link: "#capacitive"
        }
    ];

    const innovativeOptions = [
        {
            title: "2D/3D Laser Scanning",
            image: "/api/placeholder/400/400",
            link: "#laser-scanning"
        },
        {
            title: "Robotic Palletizer Safety Solutions",
            image: "/api/placeholder/400/400",
            link: "#palletizer"
        },
        {
            title: "Locking RFID Safety Switch",
            image: "/api/placeholder/400/400",
            link: "#rfid-switch"
        },
        {
            title: "ATEX Environment Safety Solutions",
            image: "/api/placeholder/400/400",
            link: "#atex"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/*<div className="mb-12 text-center">*/}
            {/*    <h1 className="text-4xl font-bold mb-4">CASECO</h1>*/}
            {/*    <p className="text-xl text-gray-600">Controls Automation Safety Engineering Company</p>*/}
            {/*    <p className="text-2xl text-blue-600 font-semibold mt-2">Your future's safe!</p>*/}
            {/*</div>*/}

            <div className="space-y-12">
                <section>
                    <SectionTitle title="Featured Technology" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredTech.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}
                    </div>
                </section>

                <section>
                    <SectionTitle title="Precision Non-Contact Sensors" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {precisionSensors.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}
                    </div>
                </section>

                <section>
                    <SectionTitle title="Innovative Options" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {innovativeOptions.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}
                    </div>
                </section>

                <footer className="mt-12 p-6 bg-gray-100 rounded-lg">
                    <div className="text-center text-gray-600">
                        <p className="font-semibold mb-2">A full spectrum of sensing and signaling products for protection, detection, and safety</p>
                        <p>100 Example Boulevard</p>
                        <p>Industrial City, ST 12345</p>
                        <p>Phone: (555) 555-0123</p>
                        <p>Email: info@caseco.com</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;