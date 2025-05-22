import React, { useEffect, useState } from "react";
import pic from "../../../src/assets/pic.jpeg";
import { FileDown, Github, Linkedin, Twitter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = ["Hello,", "I'm FrontEnd Developer", "I'm Looking For New opportunity"];

    // Dark mode observer
    useEffect(() => {
        const isDark = document.body.classList.contains("dark");
        setIsDarkMode(isDark);
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDarkMode(document.body.classList.contains("dark"));
                }
            });
        });
        observer.observe(document.body, { attributes: true });
        return () => observer.disconnect();
    }, []);

    // Simple typing effect
    useEffect(() => {
        const currentPhrase = phrases[index];
        const typingSpeed = isDeleting ? 30 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setTypedText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                if (charIndex + 1 === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), 800);
                }
            } else {
                setTypedText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setIndex((index + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <section
            id="home"
            className={`pt-50 pb-16  ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
            }`}>
                
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-3">
                            <h2 className={`text-xl font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                                Hello, I'm
                            </h2>
                            <h1 className="text-4xl md:text-5xl font-bold">Bhoop Narayan Gupta</h1>
                            <div className="h-16">
                                <span
                                    className={`text-xl md:text-2xl font-medium ${
                                        isDarkMode ? "text-gray-300" : "text-gray-600"
                                    }`}
                                >
                                    {typedText}
                                    <span className="animate-pulse">|</span>
                                </span>
                            </div>
                        </div>

                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            } max-w-lg`}
                        >
                            I build responsive, user-friendly web applications
                            with modern technologies and a focus on clean,
                            maintainable code.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                style={{ textDecoration: "none" }}
                                href="https://drive.google.com/file/d/1cF60wzNC313bHqImB2VnAguAY4nVkcqn/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                    isDarkMode
                                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                } no-underline`}
                                >
                                <FileDown size={18} />
                                Download Resume
                            </a>


                            

                            <Link
                                style={{ textDecoration: "none" }}
                                to="/contact"
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 transition-all ${
                                    isDarkMode
                                        ? "border-blue-500 text-blue-400 hover:bg-blue-500/10"
                                        : "border-blue-600 text-blue-600 hover:bg-blue-100"
                                }`} >
                                Contact Me
                            </Link>
                            {/* <Link className="no-underline"> hey</Link>
                            <Link to="/" style={{ textDecoration: "none" }}>Hey</Link> */}


                        </div>

                        <div className="pt-4">
                            <div className={`mb-2 text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                Follow me on
                            </div>
                            <div className="flex gap-4">
                                {/* <a href=""><FaGithub  className="size-8 hover:text-gray-600"/></a> */}
                                {/* <a href=""><FaLinkedin  className="size-8 hover:text-gray-600"/></a> */}
                                <a href=" https://www.instagram.com/narayangupta.45/" target="_blank"><FaInstagram  className="size-8  hover:text-red-400"/></a>

                                <a href="https://www.facebook.com/narayangupta.45" target="_blank"><FaFacebook className="size-8 hover:text-blue-600 " /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div
                            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                                isDarkMode ? "border-blue-500/30" : "border-blue-200"
                            }`}
                        >
                            <div
                                className={`absolute inset-0 rounded-full ${
                                    isDarkMode ? "shadow-lg shadow-blue-500/20" : "shadow-xl"
                                }`}
                            ></div>
                            <img
                                src={pic}
                                alt="Narayan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
