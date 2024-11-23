import Lottie from "lottie-react";
import colors from './svgs/colors.json';

const Home = () => {
    return (

        <div className="container lg:flex flex-row h-screen items-center">
            <div className="flex-1 translate-x-[0px] lg:translate-x-[100px] z-10 text-right">

                <div className="z-10 right-0">
                    <h1 className="text-6xl font-semibold text-black drop-shadow-xl">
                    Where Personal Stories Become Masterful Portraits
                    </h1>
                    <br />
                    <p className="text-sm font-light font-sans text-stone-700 w-[100%]">
                    "Discover the profound beauty of personalized art that speaks volumes without saying a word. Our skilled artists don't just paint faces – they capture souls, preserve memories, and create lasting legacies through carefully crafted brushstrokes. Whether it's a beloved family member, a power portrait for your career, or a touching tribute to someone special, we transform your vision into vibrant, emotion-filled artwork that commands attention and stirs conversations."
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

            </div>
            <div className="flex-1 translate-x-[0px] lg:-translate-x-[100px] left-0">
                <Lottie 
                    animationData={colors}
                    className="w-full"
                    loop={true}
                />
            </div>
        </div>
    );
};

export default Home;