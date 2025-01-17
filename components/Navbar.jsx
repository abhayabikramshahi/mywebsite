import React from "react";


function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <a href="#" className="text-2xl font-bold">
                    MyWebsite
                </a>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="hover:text-blue-300">Home</a></li>
                    <li><a href="#" className="hover:text-blue-300">About</a></li>
                    <li><a href="#" className="hover:text-blue-300">Services</a></li>
                    <li><a href="#" className="hover:text-blue-300">Portfolio</a></li>
                    <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                    <li><a href="#" className="hover:text-blue-300">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden block text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden bg-blue-700">
                <ul className="space-y-2 py-2 px-4">
                    <li><a href="#" className="block text-white hover:text-blue-300">Home</a></li>
                    <li><a href="#" className="block text-white hover:text-blue-300">About</a></li>
                    <li><a href="#" className="block text-white hover:text-blue-300">Services</a></li>
                    <li><a href="#" className="block text-white hover:text-blue-300">Portfolio</a></li>
                    <li><a href="#" className="block text-white hover:text-blue-300">Blog</a></li>
                    <li><a href="#" className="block text-white hover:text-blue-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
