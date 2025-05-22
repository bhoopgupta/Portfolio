import React, { useEffect, useState } from "react";
import {
   
    Mail,
    MapPin,
    Phone,
    ExternalLink,
} from "lucide-react";

const Contact = () => {
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

   

    // Contact information cards
    const contactCards = [
        {
            icon: <Mail size={28} />,
            title: "Email",
            details: "bhoopnarayan5999@gmail.com",
            action: "mailto:bhoopnarayan5999@gmail.com",
        },
        {
            icon: <MapPin size={28} />,
            title: "Location",
            details: "Lucknow",
            action: null,
        },
        {
            icon: <Phone size={28} />,
            title: "Phone",
            details: "8808820541",
            action: "tel:8808820541",
        },
    ];

    return (
        <section
            id="contact"
            className={`py-16 pt-30 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        CONTACT ME
                    </h2>
                    <div
                        className={`h-1 w-16 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                    <p
                        className={`mt-4 max-w-xl mx-auto ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        I'm currently available for freelance work and full-time
                        positions. Feel free to reach out if you'd like to
                        connect!
                    </p>
                </div>

        
                {/* Contact Information Cards */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactCards.map((card, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl text-center transition-all ${
                                    isDarkMode
                                        ? "bg-gray-700 shadow-md hover:shadow-blue-500/10 hover:shadow-lg"
                                        : "bg-gray-50 shadow-md hover:shadow-xl"
                                }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div
                                        className={`p-3 rounded-full ${
                                            isDarkMode
                                                ? "bg-gray-800 text-blue-400"
                                                : "bg-blue-100 text-blue-600"
                                        }`}
                                    >
                                        {card.icon}
                                    </div>
                                </div>

                                <h4 className="text-lg font-medium mb-2">
                                    {card.title}
                                </h4>

                                {card.action ? (
                                    <a
                                        href={card.action}
                                        className={`inline-flex items-center gap-1 ${
                                            isDarkMode
                                                ? "text-blue-400 hover:text-blue-300"
                                                : "text-blue-600 hover:text-blue-700"
                                        }`}
                                    >
                                        {card.details}
                                    </a>
                                ) : (
                                    <p
                                        className={
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }
                                    >
                                        {card.details}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call To Action */}
                <div className="text-center mt-16">
                    <div
                        className={`inline-block px-8 py-4 rounded-xl ${
                            isDarkMode
                                ? "bg-blue-500/10 border border-blue-500/30"
                                : "bg-blue-50 border border-blue-100"
                        }`}
                    >
                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-200" : "text-gray-700"
                            }`}
                        >
                            Want to work together? I'm always open to discussing
                            new projects and opportunities.
                        </p>
                        <a
                            href="mailto:bhoopnarayan5999@gmail.com"
                            className={`inline-flex items-center gap-2 mt-4 font-medium ${
                                isDarkMode
                                    ? "text-blue-400 hover:text-blue-300"
                                    : "text-blue-600 hover:text-blue-700"
                            }`}
                        >
                            Let's Talk <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
