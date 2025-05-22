import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa";
import { FaThinkPeaks } from "react-icons/fa6";

const Education = () => {


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
        icon: <FaGraduationCap size={28} />,
        title: "B.Tech (CSE)",
        details: "Shri Ramswaroop Memorial University Lucknow (SRMU)",
        year: "2018-2022",
    },
    {
        icon: <FaThinkPeaks size={28} />,
        title: "Intermediate ",
        details: "Satasi Intermediate Collage Rudrapur Deoria ",
        year: "2015-2017",
    },
    {
        icon: <FaHireAHelper size={28} />,
        title: "High School",
        details: "K.H.S.S Vansapti Bazaar Deoria ",
        year: "2013-2015",
    },
];




  return (
<section className={`py-16 pt-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}>

    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                }`}
            >
                My Education
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
                       
                        <p className={
                            isDarkMode
                             ? "text-gray-300"
                            : "text-gray-700"
                            }>
                            {card.details}
                        </p>

                        <p className="text-lg font-medium mb-2">
                            {card.year}
                        </p>
                    
                    </div>
                ))}
            </div>
        </div>

       
    </div>
</section>
  )
}

export default Education;

