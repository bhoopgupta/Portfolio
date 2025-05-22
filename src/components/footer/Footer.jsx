import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for dark mode on component mount
    useEffect(() => {
        const isDark = document.body.classList.contains("dark");
        setIsDarkMode(isDark);

        // Listen for changes in dark mode
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

    // Social media links data
    const socialLinks = [
        {
            icon: <FaInstagram size={20} />,
            name: "Instagram",
            url: "https://www.instagram.com/narayangupta.45/",
            color: "hover:bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 ",
        },
        {
            icon: <FaFacebook size={20} />,
            name: "Facebook",
            url: "https://www.facebook.com/narayangupta.45",
            color: "hover:bg-blue-600",
        },
        {
            icon: <FaLinkedin size={20} />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/bhoop-narayan-gupta-5678a31b6",
            color: "hover:bg-blue-700",
        },
        {
            icon: <FaTwitter size={20} />,
            name: "Twitter",
            url: "https://www.twitter.com",
            color: "hover:bg-sky-500",
        },
        {
            icon: <FaGithub size={20} />,
            name: "GitHub",
            url: "https://github.com/bhoopgupta",
            color: "hover:bg-gray-700",
        },
        
    ];

    
    return (
        <section
            id="contact"
            className={`py-4 h-auto ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`} >
            
                {/* Social Media Links */}
                <div className="max-w-2xl mx-auto mb-16">
                    <h3
                        className={` font-semibold mb-6 text-center ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}>
                      
                        <b>Let’s meet!</b>
                    </h3>
                    <h6 className="text-center" > Wanna a coffee break? </h6>
                   

                    <div className="flex flex-wrap justify-center gap-3 pt-3 ">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all text-white bg-gray-700 ${
                                    isDarkMode
                                        ? `bg-gray-700 hover:text-white text-gray-200 ${social.color}`
                                        : `bg-gray-100 hover:text-white text-gray-700 ${social.color}`
                                } transform hover:scale-110 hover:shadow-lg`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>


        </section>
    );
};

export default Footer;
