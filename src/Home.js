import React from "react";
import {useState, useEffect} from 'react';
import mainImg from './images/main.png';
import img2 from './images/image-2.jpeg';
import img5 from './images/image-5.jpg';

const Home = () => {

    const images = [
        `url(${mainImg})`,
        `url(${img2})`,
        `url(${img5})`,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <div className="flex bg-cover bg-center bg-no-repeat items-end min-h-screen w-full bg-fixed" style={{backgroundImage: images[currentImage] }}>
            <div className="z-10 min-w-full bg-gradient-to-t from-black to-transparent">
                <div className="lg:w-2/3 mx-auto mb-16">
                    <h1 className="mb-4 text-xl lg:text-6xl font-extrabold drop-shadow-xl text-white">
                        "If you could say it in words, there would be no reason to paint."
                    </h1>
                    <h2 className="mb-8 text-white font-extrabold text-2xl text-right">Edward Hopper (1882-1967)</h2>
                    <div className="flex-1 space-x-8">
                        <button className="text-white uppercase text-xl font-extralight bg-transparent p-5 border border-white hover:bg-white hover:text-black transition-colors duration-200" type="button">Бидний тухай
                        </button>
                        <button className="text-white uppercase text-xl font-extralight bg-transparent p-5 border border-white hover:bg-white hover:text-black transition-colors duration-200" type="button">Бүтээлүүд үзэх
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;