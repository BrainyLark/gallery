import React from "react";
import mainImg from './images/main.png';

const Home = () => {
    return (
        <div className="flex bg-cover bg-center bg-no-repeat items-center min-h-screen w-full bg-fixed" style={{backgroundImage: `url(${mainImg})`}}>
            <div className="z-10 lg:w-4/5 mx-auto lg:px-40 lg:py-24 bg-gradient-to-r from-transparent via-black/40 to-transparent">
                <h1 className="mb-4 text-xl lg:text-5xl font-extrabold drop-shadow-xl text-white">
                    "Урлаг нь уран бүтээлчийн дотоод амьдралын гадагш чиглэсэн илэрхийлэл юм."
                </h1>
                <h2 className="mb-8 text-white font-extrabold text-xl">Edward Hopper (1882-1967)</h2>
                <div className="flex-1 space-x-4">
                    <button className="text-white lg:text-xl bg-rose-600 p-3 rounded-3xl hover:text-gray-400 transition-colors drop-shadow-xl duration-200" type="button">
                        <span className="font-light">Бидний тухай</span>
                    </button>
                    <button className="text-white lg:text-xl bg-indigo-600 p-3 rounded-3xl drop-shadow-xl hover:text-gray-400 transition-colors duration-200" type="button">
                        <span className="font-light">Бүтээлүүд үзэх</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;