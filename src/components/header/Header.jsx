import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Lock/unlock scroll
    };

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Experience", to: "/experience" },
        { label: "Skills", to: "/skills" },
        { label: "Projects", to: "/projects" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-xl font-bold ">
                    <Link   style={{ textDecoration: "none" }} to="/" className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
                    <span>BN</span><span className={isDarkMode ? "text-white" : "text-black" }>.Gupta</span>
                    </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-8 ">
                    {navItems.map((item) => (
                        <NavLink
                        
                            style={{ textDecoration: "none" }}
                            key={item.label}
                            to={item.to}
                            className={({ isActive }) =>
                                `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-current after:transition-all  ${
                                    isActive ? "after:w-full" : "after:w-0"
                                } ${isDarkMode ? "text-white hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}`
                            } >
                            {item.label}
                        </NavLink>
                        
                    
                    ))}

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : " text-gray-600"} hover:opacity-80`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"} hover:opacity-80`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className={`p-2 rounded-md ${isDarkMode ? "text-white hover:bg-gray-800" : "text-gray-800 hover:bg-gray-100"}`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {isMenuOpen && (
                <div className={`md:hidden absolute top-full  text-center w-full transition-all duration-300 ease-in-out ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"} shadow-md py-4 z-40`}>
                    <div className="flex flex-col space-y-4 px-6">
                        {navItems.map((item) => (
                            <NavLink
                                style={{ textDecoration: "none" }}
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-md text-lg font-medium transition-colors   ${
                                        isDarkMode
                                            ? isActive
                                                ? "text-blue-400 bg-gray-700"
                                                : "hover:bg-gray-700 hover:text-blue-400"
                                            : isActive
                                            ? "text-blue-600 bg-gray-200"
                                            : "hover:bg-gray-200 hover:text-blue-600"
                                    }`
                                    
                                }
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.body.style.overflow = "auto";
                                }}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
