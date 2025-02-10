import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company Name</h3>
                        <p>Controls Automation Safety Engineering</p>
                        <p>123 Engineering Way</p>
                        <p>Industrial City, ST 12345</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@company.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; 2025 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;