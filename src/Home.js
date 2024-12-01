import React from "react";
import {useState, useEffect} from 'react';
import img1 from './images/image-1.jpg';
import img2 from './images/image-2.jpg';
import img3 from './images/image-3.jpg';
import img4 from './images/image-4.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Products from './Products';

const Home = () => {

    const images = [
        `url(${img1})`,
        `url(${img2})`,
        `url(${img3})`,
        `url(${img4})`,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <div className="flex bg-cover bg-center bg-no-repeat items-end min-h-screen w-full bg-fixed" style={{backgroundImage: images[currentImage] }}>
                <div className="z-10 min-w-full bg-gradient-to-t from-black to-transparent">
                    <div className="lg:w-2/3 mx-auto mb-16">
                        <h1 className="mb-4 text-2xl lg:text-7xl font-light font-serif drop-shadow-xl text-white">
                            "If you could say it in <span className="text-yellow-300">words</span>, there would be no reason to <span className="text-sky-300">paint</span>."
                        </h1>
                        <h2 className="mb-8 text-white font-extralight text-2xl text-right">Edward Hopper (1882-1967)</h2>
                        <div className="flex-1 space-x-8">
                            <button className="text-white uppercase text-sm lg:text-xl font-extralight bg-transparent p-4 border border-white hover:bg-white rounded-full hover:text-black transition-colors duration-200" type="button"><i className="bi bi-info-circle"></i>&nbsp;&nbsp;Бидний тухай
                            </button>
                            <button className="text-white uppercase text-sm lg:text-xl font-extralight bg-transparent p-4 border border-white hover:bg-white rounded-full hover:text-black transition-colors duration-200" type="button"><i className="bi bi-easel"></i>&nbsp;&nbsp;Бүтээлүүд үзэх
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-thin drop-shadow-xl text-4xl capitalize mb-8 mt-8">Сүүлд нэмэгдсэн</h1>
            <Products />
            <h1 className="font-thin drop-shadow-xl capitalize text-4xl mb-8">Онцлох бүтээлүүд</h1>
            <Products />
            <h1 className="font-thin drop-shadow-2xl capitalize text-4xl mb-8">Категори</h1>
            <Products />
        </div>
    );
};

export default Home;