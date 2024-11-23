import Lottie from "lottie-react";
import colors from './svgs/colors.json';

const Home = () => {
    return (

        <div className="container lg:flex flex-row h-screen items-center bg-gradient-to-b from-slate-300">
            <div className="flex-1 translate-x-[0px] lg:translate-x-[50px] z-10 text-right">

                <div className="z-10">
                    <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-sky-600 text-4xl font-base font-extrabold drop-shadow-xl">
                        Зурах шалтгаан байхгүй нь л зурах шалтгаан шүү дээ!
                    </h1>
                    <br />
                    <p className="mb-6 font-light text-sm text-gray-600 w-[100%]">
                    "Уран зураачдын таталт бүр нь утга агуулах бүтээлүүд дан ганц юмс үзэгдэл бус, харин оюун бодол, цаг хугацаа, орон зайн хязгаараас халин урсах сүнслэг байдал буюу дурсамжийн цоморлог зэрэг хүний сэтгэлийг хөглөж оюуныг ундаална. Хүний сэтгэлийн гүн хавцлаас булгилан гарах мэдрэмжийг дамжуулах нь уран зохиолын үгийн сан үл хязгаарлагдах зах хязгааргүй өнгөний хослол юм."
                    </p>
                    <div className="space-x-4">
                        <button className="text-white bg-violet-600 p-4 rounded-3xl hover:bg-transparent hover:text-violet-800 transition-colors drop-shadow-xl duration-500" type="button">
                            <span className="font-extrabold">БҮТЭЭЛ ҮЗЭХ</span>
                        </button>
                        <button className="text-white bg-pink-500 p-4 rounded-3xl drop-shadow-xl hover:bg-transparent hover:text-pink-500 transition-colors duration-500" type="button">
                    <span className="font-extrabold">ЗАХИАЛАХ</span>
                </button>
                    </div>
                </div>

            </div>
            <div className="flex-1 translate-x-[0px] lg:-translate-x-[50px] left-0">
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