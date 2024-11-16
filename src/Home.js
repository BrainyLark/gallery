import Lottie from "lottie-react";
import colors from './svgs/colors.json';

const Home = () => {
    return (
    <div className="relative min-h-screen bg-white overflow-hidden">

        {/* Main Content */}
        <div className="container mx-auto">
            <div className="relative min-h-screen flex items-center">
            {/* Left Side - Text Content */}
                <div className="w-[70%] px-12 z-10">
                    <h1 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900">
                    МАНАЙ <span className="text-9xl"><span className="text-pink-500">У</span>Р<span className="text-sky-500">Л</span><span className="text-green-500">А</span><span className="text-violet-600">Н</span><span className=""></span></span>Д ТАВТАЙ МОРИЛЖ ТААЛАН СОЁРХ!
                    </h1>
                    <p className="text-xs font-extrabold font-sans text-stone-700 w-[100%]">
                        Бидний бүтээлийг таалан соёрхож өрх гэр, 
                        албан газрынхаа үүд, хойморт залрах зургийг сонгоорой!
                        Хэрвээ та уран бүтээлч бол бидэнтэй хамтарч ажиллахыг
                        урьж байна.
                    </p>
                    <br />
                    <div className="space-x-4">
                        <button className="text-white bg-violet-600 p-4 rounded-3xl hover:bg-white hover:text-violet-800 transition-colors drop-shadow-xl duration-500" type="button">
                            <span className="font-extrabold">БҮТЭЭЛ ҮЗЭХ</span>
                        </button>
                        <button className="text-white bg-pink-500 p-4 rounded-3xl drop-shadow-xl hover:bg-white hover:text-pink-500 transition-colors duration-500" type="button">
                    <span className="font-extrabold">ЗАХИАЛАХ</span>
                </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="absolute right-0 w-[70%]">
                <Lottie 
                    animationData={colors}
                    className="w-full"
                    loop={true}
                />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;