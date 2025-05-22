
import React, {useEffect, useState } from "react";
import pic from "../../../src/assets/pic.jpeg";
import { MdFileDownload } from "react-icons/md";
import Education from "./Education";

    

const About = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
   

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

  return (

   <>
    <section className={`pt-30 pb-16  ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
             }`}>
        
        <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}>
                        About Me 
                    </h2>
                    <div
                        className={`h-1 w-16 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                </div>


            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
                {/* Left Content - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                        isDarkMode ? "border-blue-500/30" : "border-blue-200"
                         }`} >
                        
                        <div className={`absolute inset-0 rounded-full ${
                            isDarkMode ? "shadow-lg shadow-blue-500/20" : "shadow-xl"
                            }`}> 
                        </div>

                        <img
                        src={pic}
                        alt="Narayan"
                        className="w-full h-full object-cover"/>

                    </div>
                </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                        <h2 className={`text-xl font-medium kaushan ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-bold ">Bhoop Narayan Gupta</h1>
                        
                        <h1> about me hoga</h1>
                    </div>

                    <p className={`text-lg ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        } max-w-lg`}>
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
                            <MdFileDownload size={18} />
                            Download Resume
                         </a>
                    </div>
 
                </div>

            

            </div>
        </div>

    </section>


    <Education />
   </>





  )
}

export default About;
